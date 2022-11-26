import React from 'react';
import Button from './Button';
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
      <h1>App Name</h1>
      <Button />
    </>
  );
};

export default App;
