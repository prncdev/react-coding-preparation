import { FC, useEffect, useReducer } from "react";

const initialState = {
  isLoading: true,
  title: '',
  errorMessage: '',
};

const reducer = function(state: any, action: {type: 'Fetch_Succeed' | 'Fetch_Failed' ; payload: any}) {
  switch(action.type) {
    case 'Fetch_Succeed':
      return {
        isLoading: false,
        title: action.payload,
        errorMessage: '',
      }
    
    case 'Fetch_Failed':
      return {
        isLoading: false,
        title: '',
        errorMessage: action.payload,
      }
    
    default:
      return state;
  }
}

const FetchDataReducerState: FC = function() {
  const [post, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
          const { title } = data;
          dispatch({ type: 'Fetch_Succeed', payload: title })
      })
      .catch(error => dispatch({ type: "Fetch_Failed", payload: 'Something went wrong' }));
  }, []);

  return (
    <div>
      {post.isLoading ? 'Loading' : post.title }
      { post.errorMessage && post.errorMessage }
    </div>
  )
}

export default FetchDataReducerState;