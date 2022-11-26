import React from 'react';
import UserInput from './UserInput';
import OutputBox from './OutputBox';
import Shark from './static/shark.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BoxContainer = (props) => {
  const [inputText, setInputText] = useState('');
  const [inputTextLength, setInputTextLength] = useState(0);
  const [inputLanguage, setInputLanguage] = useState('Javascript');
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    setInputTextLength(inputText.toString().length);
  });

  const handleTyping = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(JSON.stringify(inputText));
    event.preventDefault();
    console.log('making call to backend');
    const requestURI = process.env.BACKEND_API_URI;
    console.log(process.env.BACKEND_API_URI);
    const response = await axios.get(requestURI, {
      body: {
        text: JSON.stringify(inputText),
        language: 'JavaScript',
      },
    });

    setOutputText(response.data);
  };

  return (
    <main id='BoxContainer' style={{ display: 'flex' }}>
      <UserInput
        inputlanguage={inputLanguage}
        inputText={inputText}
        handleTyping={handleTyping}
        handleSubmit={handleSubmit}
        inputTextLength={inputTextLength}
      />
      <div id='imgWrapper'>
        <img id='shark' src={Shark}></img>
      </div>
      <OutputBox outputText={outputText} />
    </main>
  );
};

export default BoxContainer;
