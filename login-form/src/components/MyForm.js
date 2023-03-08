import '../App.css';
import React, { useState } from 'react';

export default function MyForm() {
  const [info, setInfo] = useState({
    name: '',
    age: ''
  });

  const handleChange = (e) => 
    setInfo({...info,[e.target.name]: e.target.value})

  // render object ra chuoi
  const handleSubmit = (e) => {
    e.preventDefault();
    alert ('You are submitting ' + JSON.stringify(info))   
  }

  let header;
  if (info.name){
    header = <h1>Hello {info.name}</h1>;
  } else {
    header = <h1>Hello</h1>;
  }

  return (
    <div className="App">
      {header}
      <form onSubmit={handleSubmit}>
        <h2>Input your name:</h2>
        <input name = 'name' type = 'text' value = {info.name} onChange = {handleChange}/>
        <h2>Input your age:</h2>
        <input name = 'age' type = 'number' value = {info.age} onChange = {handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
