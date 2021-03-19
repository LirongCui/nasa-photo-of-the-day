import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import PhotoCard from './components/photocard'
import styled from 'styled-components'

const StyledHeader = styled.div`
  color: royalblue;
  text-align: center;
`

const StyledBody = styled.div`
  color: darkgray;
  text-align: center;
  &:hover {
    color: black;
    background-color: lightgray;
    transition: all 2s ease-in-out;
  }

`

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
    <div>
      <StyledHeader className='header-div'>
        <h1><span role="img" aria-label='go!'>🚀</span> Welcome to Nasa Gallery <span role="img" aria-label='go!'>🚀</span></h1>
      </StyledHeader>
      <StyledBody>
          <PhotoCard data={nasadata}/>
      </StyledBody>
    </div>

  );
}

export default App;
