import React from "react";
import { useState } from "react";
import Button from "./Button";
import "../App.css";

let Jokes=()=>{

    let[joke, setJoke]=useState("");

    let fetchAPI=(data)=>{  //When user on Button function the fetchAPI function will be called.
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((para)=>setJoke(para.joke));

        data.preventDefault();
    };

    return(
        <div className="jokeFetch">
            <h3>Project Based On Using React Framework and Joke API</h3>
            <div className="Joke">
            <p id="para1">Click on the below button to generate new jokes.</p>
            <p id="displayJoke">{joke}</p>
            <Button useAPI={fetchAPI} /> {/* //When user on Button function the fetchAPI function will be called to generate a joke.*/}
            </div>
        </div>
    );
};
export default Jokes;