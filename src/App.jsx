import Rating from "./components/Rating";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    console.log("Init count state...");
    return 0;
  });

  const increment = () => {
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    });
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

//sfc (Shortcut) -> arrow function
const App = () => {
  return (
    <div>
      <Rating />
      <Counter />
    </div>
  );
};

export default App;
