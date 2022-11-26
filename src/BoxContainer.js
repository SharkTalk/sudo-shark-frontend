import React from 'react';
import UserInput from './UserInput';
import OutputBox from './OutputBox';
import Shark from './static/shark.png';
import { useEffect } from 'react';
import axios from 'axios';

const BoxContainer = (props) => {
  useEffect(() => {
    async function fetchData() {
      const requestURI = process.env.BACKEND_API_URI;
      const response = await axios.get(requestURI);
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <main id='BoxContainer' style={{ display: 'flex' }}>
      <UserInput />
      <div id='imgWrapper'>
        <img id='shark' src={Shark}></img>
      </div>
      <OutputBox />
    </main>
  );
};

export default BoxContainer;
