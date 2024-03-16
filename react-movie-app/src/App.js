import { useState, useEffect } from "react";
function App() {
  const [showing, setShowing] = useState(false);

  // function Hello() {
  //   useEffect(() => {
  //     console.log("created :D");
  //     return () => console.log("destroyed :<");
  //   }, []);
  //   return <h1>Hello</h1>;
  // }
  // function Hello() {
  //   function hiFn() {
  //     console.log("created :D");
  //     return byeFn;
  //   }
  //   function byeFn() {
  //     console.log("destroyed :<");
  //   }
  //   useEffect(hiFn, []);
  //   return <h1>Hello</h1>;
  // }
  const Hello = () => {
    useEffect(() => {
      console.log("create");
      return () => {
        console.log("bye");
      };
    });
    return <h1>Hello!</h1>;
  };
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
