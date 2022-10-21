import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function App() {
  return (
    <div className="App" style={{width: '100', height: '500px'}}>
      <h1>Trabajando Graficas en React</h1>
      <LineChart/>
      <BarChart/>
    </div>
  );
}

export default App;
