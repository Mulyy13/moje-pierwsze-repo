import "./App.css";
import { useRef, useState } from "react";

function App() {
  const buttonRef = useRef();
  const [count, setCount] = useState();

  const onClick = () => {
    if (!buttonRef.current) return;

    buttonRef.current.style.backgroundColor = "red";
    buttonRef.current.style.transform = "scale(10)";
    buttonRef.current.style.transformOrigin = "0 0";
  };

  return (
    <div>
      <h1>Hello!</h1>

      <button ref={buttonRef} onClick={onClick}>
        click me
      </button>

      <h2>{count}</h2>
    </div>
  );
}

export default App;
