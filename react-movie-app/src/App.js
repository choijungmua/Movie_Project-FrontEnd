import { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((res) => res + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    console.log("keyword change");
  }, [keyword]);
  useEffect(() => {
    console.log("counter change");
  }, [counter]);
  useEffect(() => {
    console.log("counter and keyword change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here... "
      />
      <h1>{`버튼 클릿 횟수 : ${counter}`}</h1>
      <button onClick={onClick}>Button Click</button>
    </div>
  );
}

export default App;
