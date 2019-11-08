import React from "react";
import NasaList from "./components/NasaList";
import "./App.css";
// import Example from './components/Example';
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      <NasaList />
         {/* <Example />  */}
    </div>
  );
}
export default App;