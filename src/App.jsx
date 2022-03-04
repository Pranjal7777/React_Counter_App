import "./styles.css";

import { Counter } from "./componants/Counter";

function App() {
  const counter = 0;
  return (
    <div>
      <Counter value={counter} />
    </div>
  );
}

export default App;
