import React from "react";
import Jokes from "../src/Component/JokesApi.js";
import "../src/App.css";

let App=()=>{

  return(
    <>
    <div className="forSpace"></div>
    <div className="jokesPage">
    <h1 style={{textAlign:"center"}}>Welcome to Joke Generator Website</h1>
    <Jokes /> {/* Calling the Jokes Function */}
    </div>
    </>
  );

};
export default App;