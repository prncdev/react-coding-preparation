import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/RCC/Counter';
import BindingEvent from './components/RCC/BindingEvent';
import { LifecycleA } from './components/RCC/lifecycle_methods/LifecycleA';
// import ParentComp from './components/RCC/PureCompoent_e.g/ParentComp';
import ParentComp from './components/RFC/React.memo/ParentComp';
import RefDemo from './components/React_Refs/RefDemo';
import FocusInput from './components/React_Refs/FocusInput';
import ForwardRefParent from './components/React_Refs/ForwardRefParent';
import PortalComponent from './components/RCC/PortalComponent';
import FallBackUI from './components/RCC/ErrorHandler/FallBackUI';
import HeroName from './components/RCC/ErrorHandler/HeroName';
import ClickCounter from './components/HOCs/ClickCounter';
import HoverCounter from './components/HOCs/HoverCounter';
import CounterRenderProps from './components/RenderPropsPattern/CounterRenderProps';
import IncrementOnClick from './components/RenderPropsPattern/IncrementOnClick';
import IncrementOnHover from './components/RenderPropsPattern/IncrementOnHover';
import ParentContext from './components/ContextConsumer/ParentContext';
import CounterStateHook from './components/RFC/CounterWithUseState';
import NestedStateValue from './components/RCC/NestedStateValue';
import NestedStateHook from './components/RFC/NestedStateHook';
import UpdatePageTitle from './components/RCC/UpdatePageTitle';
import UpdatePageTitleEffect from './components/RFC/UpdatePageTitleEffect';
import UseEffectCleanUpWrapper from './components/RFC/UseEffectCleanUpWrapper';
import IntervalHookCounter from './components/RFC/IntervalHookCounter';
import ParentContextHook from './components/RFC/UseContextHook/ParentContextHook';
import SimpleCounter from './components/RFC/UseReducerHook/SimpleCounter';
import ComplexCounter from './components/RFC/UseReducerHook/ComplexCounter';
import MultipleReducers from './components/RFC/UseReducerHook/MultipleReducers';
import ParentReducerContext from './components/RFC/UseReducerHook/ParentReducerContext';
import FetchDataReducerState from './components/RFC/UseReducerHook/FetchDataReducerState';
import ParentCallbackHook from './components/RFC/UseCallbackHook/ParentCallbackHook';
import UseMemoLongRunningTask from './components/RFC/UseMemoLongRunningTask';
import UseRefHook from './components/RFC/UseRefHook/UseRefHook';
import TimerHook from './components/RFC/UseRefHook/TImerHook';

interface IState {
  randomId: string | number;
  count: number;
}
class App extends Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
      randomId: '$2a$10$OiuWd6U7ySMSVUfCXi5LRu--75eb0286-c806-4c16-a324-19467e8965a6',
    }

    this.assignRandomId = this.assignRandomId.bind(this);
    
  }

  assignRandomId(): void {
    // let randomNum = Math.floor(Math.random() *100);
    // console.log(randomNum);

    const ids = [
      '$2a$10$bb32facVoPzNhro6e30vYu--963dd745-763e-416e-a2f9-a28457687858'
    ];

    if (this.state.count > 1) {
      this.setState((prevState => {
        return { count: 0 }
      }), () => {
        console.log(this.state.count);
      });
    }

    this.setState((prevState => {
      return {
        randomId: ids[this.state.count],
        count: prevState.count + 1,
      }
    }), () => {
      console.log(this.state.count);
    });
  }

  render(): JSX.Element {
    return (
      <div className="App">
        {/* <Counter /> */}
        <header className="App-header">
          {/* <BindingEvent /> */}
          {/* <LifecycleA id={this.state.randomId}/> */}
          {/* <button onClick={this.assignRandomId}>Generate a Random ID</button> */}
          {/* <ParentComp /> */}
          {/* <RefDemo /> */}
          {/* <FocusInput /> */}
          {/* <ForwardRefParent /> */}
          {/* <PortalComponent /> */}
          {/* <Error Boundary> */}
            {/* <FallBackUI>
              <HeroName homeName='Batman' />
            </FallBackUI>

            <FallBackUI>
              <HeroName homeName='Superman' />
            </FallBackUI>

            <FallBackUI>
              <HeroName homeName='Badman' />
            </FallBackUI>

            <FallBackUI>
              <HeroName homeName='Joker' />
            </FallBackUI> */}
          {/* <Error Boundary /> */}

          {/* HOCs */}
            {/* <HoverCounter />
            <ClickCounter name="Prince" /> */}
          {/* HOCs */}

          {/* Render Props pattern */}
              {/* <CounterRenderProps render={(counter: number, incrementCount: () => void) => (
                <IncrementOnClick
                  counter={counter}
                  incrementFn={incrementCount}
                />
              )} /> */}

              {/* <CounterRenderProps render={(counter: number, incrementCount: () => void) => (
                <IncrementOnHover counter={counter} incrementFn={incrementCount}/>
              )}/> */}
          {/* Render Props pattern */}

          {/* <ParentContext /> */}
          {/* <NestedStateValue /> */}
          {/* <UpdatePageTitle /> */}




          {/* Hooks starts from here. */}
          {/* <CounterStateHook /> */}
          {/* <NestedStateHook /> */}
          {/* <UpdatePageTitleEffect /> */}
          {/* <UseEffectCleanUpWrapper /> */}
          {/* <IntervalHookCounter /> */}
          {/* <ParentContextHook /> */}
          {/* <SimpleCounter /> */}
          {/* <ComplexCounter /> */}
          {/* <MultipleReducers /> */}
          {/* <ParentReducerContext /> */}
          {/* <FetchDataReducerState /> */}
          {/* <ParentCallbackHook /> */}
          {/* <UseMemoLongRunningTask /> */}
          {/* <UseRefHook /> */}
          <TimerHook />
        </header>
      </div>
    )
  }
}
export default App;
