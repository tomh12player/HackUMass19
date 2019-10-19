import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomePage />;
  }
}

export default App;
