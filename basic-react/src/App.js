import React from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {

  const players = [
    {
     name: "SCHMEICHEL",
     full_name: "Peter Boleslaw Schmeichel",
     position: "GK",
     number: "1", 
    },
    {
      name: "NEVILLE",
      full_name: "Gary Alexander Neville",
      position: "RB",
      number: "2", 
    },
    {
      name: "IRWIN",
      full_name: "Denis Joseph Irwin",
      position: "LB",
      number: "3", 
    },
    {
      name: "STAM",
      full_name: "Jakob Stam",
      position: "CB",
      number: "6", 
    },
    {
      name: "J. NEVILLE",
      full_name: "Phillip John Neville",
      position: "CB",
      number: "12", 
    },
    {
      name: "KEANE",
      full_name: "Roy Maurice Keane",
      position: "LM",
      number: "16", 
    },
    {
      name: "SCHOLES",
      full_name: "Paul Aaron Scholes",
      position: "CM",
      number: "18", 
    },
    {
      name: "BUTT",
      full_name: "Nicholas Butt",
      position: "CM",
      number: "8", 
    },
    {
      name: "BECKHAM",
      full_name: "David Joseph Beckham",
      position: "RM",
      number: "7", 
    },
    {
      name: "D. YORKE",
      full_name: "Dwight Eversley Yorke",
      position: "CF",
      number: "19", 
    },
    {
      name: "A. Cole",
      full_name: "Andrew Alexander Cole",
      position: "CF",
      number: "9", 
    }
  ]

  return (
    <div className="App">
      <h1>Manchester United 1998-1999</h1>
      <p>Manager : Ferguson</p>
      <hr/>

      {
        players.map (player => {
          const { name, full_name, position, number } = player
          return (
            <Profile name = {name} full_name = {full_name} position = {position} number = {number}/>
          )
        })
      }

    </div>
  );
}

export default App;
