import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(()=>{
    console.log('useEffect');
  },[]);

  return <h1>hi</h1> 
}

export default App;
