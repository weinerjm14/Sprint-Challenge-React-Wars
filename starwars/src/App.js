import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

import PersonContainer from "./components/PersonComponent";

const App = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
      setPeople(response.data.results)
    }).catch(error => {
      console.log(error)
    })
  }, []);
  console.log("outside", people)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(item => {
        return <PersonContainer 
        name = {item.name}
        height ={item.height}
        mass = {item.mass}
        hair_color = {item.hair_color}
        skin_color = {item.skin_color}
        eye_color = {item.eye_color}
        birth_year = {item.birth_year}
        gender = {item.gender}
        />
      })}
    </div>     
  )
}

export default App;