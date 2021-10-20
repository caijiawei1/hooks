import "./styles.css";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState
} from "react";

export default function App() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: initialState.count };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(1);

  useEffect(() => {
    console.log(1);
  }, []);

  const isEvenNumber = useMemo(() => {
    return data % 2 === 0;
  }, [data]);

  const handelClick = useCallback(() => {
    setData(data + 1);
  }, [data]);

  const renderButton = useCallback(
    () => <button>{data}</button>,
    [data] // 当buttonText改变时才重新渲染renderButton
  );

  return (
    <div className="App">
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <div>
        {data} is {isEvenNumber ? "even" : "odd"} number
      </div>
      {renderButton}
      <br />
      <button onClick={handelClick}>{data}</button>
    </div>
  );
}
