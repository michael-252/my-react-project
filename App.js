import React, { useState } from "react";


function App() {
const [count, setCount] = useState(0);
const increment = () => setCount((prevCount) => prevCount + 1);
const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
        <h1> Counter App</h1>
        <h2>Count: {count}</h2>
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
        

    </div>
  );
}

export default App;
