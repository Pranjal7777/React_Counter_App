import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const change = (value) => {
    setCounter(counter + value);
  };

  const multiply = (value) => {
    setCounter(counter * 2);
  };
  return (
    <div className="App">
      <h2>Counter : {counter}</h2>

      <button onClick={() => change(1)}>Add</button>
      {/* onDoubleClick={() => multiply(2)}  */}
      <button onClick={() => change(-1)}>Subtract</button>
      <button onClick={() => multiply(2)}>Double</button>
    </div>
  );
}

export { Counter };
