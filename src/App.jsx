import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";

function App() {
  const [total, setTotal] = useState(0)
  return (
    <div className="App">
      <Navbar />
      {total}
      <div className="container">
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
        <Card increment={() => setTotal(total + 1)} />
      </div>
    </div >
  );
}

export default App;
