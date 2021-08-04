import "./App.css";
import EffectTutorial from "./hooks/UseEffect/EffectTutorial";
import ImperativeHandle from "./hooks/UseImperativeHandle/ImperativeHandle";
import LayoutEffectTutorial from "./hooks/UseLayoutEffect/LayoutEffectTutorial";
import ReducerTutotial from "./hooks/UseReducer/ReducerTutotial";
import RefTutorial from "./hooks/UseRef/RefTutorial";
import StateTutorial from "./hooks/useState/StateTutorial";
function App() {
  return (
    <div className="App">
      {/* <StateTutorial/> */}
      {/* <ReducerTutotial/> */}
      {/* <EffectTutorial/> */}
      {/* <RefTutorial/> */}
      {/* <LayoutEffectTutorial /> */}
      <ImperativeHandle />
    </div>
  );
}

export default App;
