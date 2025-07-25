import Plugin from 'plugin';
import {incrementSharedState, getSharedState} from 'cc_shared'
import {useState} from "react";

const App = () => {
  const [_, forceRender] = useState({})
  return (
      <>
        <div>
            Host: {getSharedState()}
            <button onClick={() => {
                incrementSharedState();
                // Platform and Plugin are in same React tree.
                // Child tree Plugin is rerendered as well just like a regular React component
                forceRender({})
            }}>Increment</button>
        </div>
        <Plugin />
      </>
  );
};

export default App;
