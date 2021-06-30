import React from "react";
import "./styles.css";

export default function App() {
  const [name, userName] = React.useState("Mary Poppins");

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button
        onClick={() => {
          name === "Mary Poppins"
            ? userName((name.setState = "Harry Potter"))
            : userName((name.setState = "Mary Poppins"));
        }}
      >
        Change name
      </button>
    </div>
  );
}