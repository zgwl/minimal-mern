import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("Fetching data from backend");
    fetch("http://localhost:5050")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from backend: {message}</p>
      </header>
    </div>
  );
}

export default App;
