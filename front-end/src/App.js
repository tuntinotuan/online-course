import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux-toolkit/counterSlice";
import DemoPage from "./pages/DemoPage";

function App() {
  const dispatch = useDispatch();
  const [byValue, setByValue] = useState(2);
  const { count } = useSelector((state) => state.counter);
  const turnOnSweetalert2 = () => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Your has been deleted.`, "success");
      }
    });
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue({ value: byValue }));
  };
  return (
    <div className="App">
      {/* <span>{count}</span>
      <h1>Hi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        pariatur dicta delectus nesciunt asperiores fuga excepturi ipsum cum rem
        qui consectetur quam, blanditiis corporis enim accusamus officiis dolore
        porro sequi?
      </p>
      <button
        className="p-5 bg-gray-300 rounded-md"
        onClick={turnOnSweetalert2}
      >
        Demo react-sweetalert2
      </button>
      <button className="p-5 bg-gray-300 rounded-md" onClick={handleIncrement}>
        Increment
      </button>
      <button className="p-5 bg-gray-300 rounded-md" onClick={handleDecrement}>
        Decrement
      </button>
      <input
        type="number"
        defaultValue={byValue}
        className="border border-gray-200 rounded-md outline-none"
        onChange={(e) => setByValue(Number(e.target.value))}
      />
      <button
        className="p-5 bg-gray-300 rounded-md"
        onClick={handleIncrementByValue}
      >
        Increment By Value
      </button> */}
      <DemoPage></DemoPage>
    </div>
  );
}

export default App;
