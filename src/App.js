import React, { useEffect, useState } from 'react';
import './App.css';
import Block from './Component/Block/Block';
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [nasa, setnasa] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=hRjp3bfBDhlwkF5kyC1B0dsmWacqSZWLnCVqWAgu");
      const resJson = await res.json();
      setnasa(resJson);
      setLoading(!loading);
    }
    fetchData();
  }, [])

  return (
    <div className="App">

      {
        loading ? <PacmanLoader color={color} loading={loading} size={30} /> : <Block block={nasa} />
      }
    </div>
  );
}

export default App;
