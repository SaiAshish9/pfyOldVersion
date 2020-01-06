import React from "react";
// import './App.css';
import AppRouter from "./routes/router";
import 'antd/dist/antd.css';
// import Header from "./components/header/header";

function App() {
  return (
    <div style={{height:"100%"}}>
      <AppRouter />
    </div>
  );
}

export default App;
