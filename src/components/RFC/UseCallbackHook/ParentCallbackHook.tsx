import { useReducer, useCallback, FC } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

interface IState {
  age: number;
  salary: number
}

interface IAction {
  type: string;
  payload: number;
}

const initialState = {
  age: 25,
  salary: 35000,
}


const reducer = function (state: IState, action: IAction) {
  switch (action.type) {
    case 'age':
      return {
        ...state,
        age: state.age + action.payload
      }

    case 'salary':
      return {
        ...state,
        salary: state.salary + action.payload
      }

    default:
      return state;
  }
}

const ParentCallbackHook: FC = function () {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('***************ParentCallbackHook***********');

  const handleAgeCount = useCallback(function () {
    dispatch({ type: 'age', payload: 1 });
  }, [state.age]); // This the dependency array, to look for changes.

  const handleSalaryCount = useCallback(function () {
    dispatch({ type: 'salary', payload: 15000 });
  }, [state.salary]);

  return (
    <div>
      <Title />
      <Count text='Age' count={state.age} />
      <Button handleClick={handleAgeCount}>Age Increaser</Button>

      <Count text='Salary' count={state.salary} />
      <Button handleClick={handleSalaryCount}>Salary Increaser</Button>
    </div>
  )
}

export default ParentCallbackHook;