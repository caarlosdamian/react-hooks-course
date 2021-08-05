import "./App.css";
import CallbackTutorial from "./hooks/UseCallback/CallbackTutorial";
import ContextTutorial from "./hooks/useContext/ContextTutorial";
import EffectTutorial from "./hooks/UseEffect/EffectTutorial";
import ImperativeHandle from "./hooks/UseImperativeHandle/ImperativeHandle";
import LayoutEffectTutorial from "./hooks/UseLayoutEffect/LayoutEffectTutorial";
import MemoTutotial from "./hooks/UseMemo/MemoTutotial";
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
      {/* <ImperativeHandle /> */}
      {/* <ContextTutorial/> */}
      {/* <MemoTutotial /> */}
      <CallbackTutorial/>
    </div>
  );
}

export default App;
