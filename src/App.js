import React from 'react';
import UserInput from './UserInput';
import { useEffect } from 'react';
import axios from 'axios';

const App = (props) => {
  useEffect(() => {
    async function fetchData() {
      const requestURI = process.env.BACKEND_API_URI;
      const response = await axios.get(requestURI);
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Sudo Shark</h1>
      <UserInput />
    </>
  );
};

export default App;
