import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/photocard'

function App() {
  const [nasadata, setNasaData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasaData(res.data)
      console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
  },[])

  return (
    <div className='container'>
      <h1><span role="img" aria-label='go!'>🚀</span> Welcome to Nasa Gallery <span role="img" aria-label='go!'>🚀</span></h1>
        <div>
          <PhotoCard data={nasadata}/>
        </div>
    </div>
  );
}

export default App;
