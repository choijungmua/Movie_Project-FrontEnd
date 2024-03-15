import Button from "./button";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!</h1>
      <Button text="Button Click" />
    </div>
  );
}

export default App;
