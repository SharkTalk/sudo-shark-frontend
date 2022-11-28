import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput';
import OutputBox from './OutputBox';
import SearchedResults from './SearchedResults';
import Shark from './static/shark.png';
import SignInButtons from './SignInButtons';

function BoxContainer() {
  const [inputText, setInputText] = useState('');
  const [inputTextLength, setInputTextLength] = useState(0);
  const [inputLanguage, setInputLanguage] = useState('Javascript');
  const [outputText, setOutputText] = useState('');
  const [username, setUsername] = useState('');
  const [searched, setSearched] = useState([]);

  // mock data for searched:
  // to test first update username in the state to any mock string as well
  // {code: "function() {console.log(hey)}", translation: "This is a function with console.log"},
  // {code: "useEffect(() => {setInputTextLength(inputText.toString().length)",
  // translation: "this is another function"}

  useEffect(() => {
    setInputTextLength(inputText.toString().length);
  });

  // functionality to get previously researched queries from the database
  useEffect(() => {
    if (username.length !== 0) {
      console.log('useEffect hook: ', username);
      const requestURI = `${process.env.BACKEND_USER_URI}/getRequests`;
      const getRequests = async () => {
        const response = await axios.post(requestURI, {
          username,
        });
        console.log(response.data);
        setSearched(response.data);
      };
      getRequests();
    }
  }, [username]);

  // function to invoke when user clicks one previously searched query
  // we expect to see full code and translation in the input / output boxes
  const handleElementClick = (obj) => {
    document.querySelector('#filled-multiline-static').value = obj.code; // should be researched and perfected
    setOutputText(obj.translation);
  };

  const handleTyping = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(JSON.stringify(inputText));
    event.preventDefault();
    console.log('making call to backend');
    const requestURI = process.env.BACKEND_API_URI;

    const json = {
      text: inputText,
      language: 'JavaScript',
    };

    // sending username if user is logged in
    if (username.length > 0) {
      json.username = username;
    }

    const response = await axios.post(requestURI, json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    setOutputText(response.data);
  };

  return (
    <>
      <SignInButtons setUsername={setUsername} stateUsername={username} />

      <main id='BoxContainer' style={{ display: 'flex' }}>
        {username && (
        <SearchedResults
          handleElementClick={handleElementClick}
          searched={searched}
        />
        )}
        <UserInput
          inputlanguage={inputLanguage}
          inputText={inputText}
          handleTyping={handleTyping}
          handleSubmit={handleSubmit}
          inputTextLength={inputTextLength}
        />
        <div id='imgWrapper'>
          <img id='shark' alt='' src={Shark} />
        </div>
        <OutputBox outputText={outputText} />
      </main>
    </>
  );
}

export default BoxContainer;
