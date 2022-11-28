import React from 'react';
import UserInput from './UserInput';
import OutputBox from './OutputBox';
import SearchedResults from './SearchedResults';
import Shark from './static/shark.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { toString } from 'nlcst-to-string';
import { retext } from 'retext';
import retextPos from 'retext-pos';
import retextKeywords from 'retext-keywords';

// mock data for searched:
// to test first update username in the state to any mock string as well
const mockDataForSearch = [
  {
    code: `<!DOCTYPE html>
    <html>
    <head>
        <title>
            How to insert spaces/tabs in text using HTML/CSS?
        </title>
    </head>
    <body>
        <h1 style="color: green">GeeksforGeeks</h1>
        <b>How to insert spaces/tabs in text using HTML/CSS?</b>
          
        <p>This is a &nbsp; regular space.</p>
        <p>This is a &ensp; two spaces gap.</p>
        <p>This is a &emsp; four spaces gap.</p>
    </body>
    </html>`,
    translation: 'This is a function with console.log',
  },
  {
    code: 'useEffect(() => {setInputTextLength(inputText.toString().length)',
    translation: 'this is another function',
  },
];

const BoxContainer = (props) => {
  const [inputText, setInputText] = useState('');
  const [inputTextLength, setInputTextLength] = useState(0);
  const [inputLanguage, setInputLanguage] = useState('Javascript');
  const [outputText, setOutputText] = useState('');
  const [username, setUsername] = useState('Robbie');
  const [open, setHistoryOpen] = useState(false);
  const [shrinkComponent, setShrinkComponent] = useState({});
  const [searched, setSearched] = useState(mockDataForSearch);

  useEffect(() => {
    setInputTextLength(inputText.toString().length);
  });

  // // functionality to get previously researched queries from the database
  // useEffect(() => {
  //   if (username) {
  //     const requestURI = process.env.BACKEND_API_URI + '/user/getRequests';
  //     const getSearched = async () => {
  //       const response = await fetch(requestURI, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*', // might not need this
  //         },
  //         body: JSON.stringify({
  //           username: username,
  //         }),
  //       });
  //       return response.data;
  //     };
  //     const data = getSearched();
  //     setSearched(data);
  //   }
  // }, [username]);

  // function to invoke when user clicks one previously searched query
  // we expect to see full code and translation in the input / output boxes
  function handleElementClick(obj) {
    setShrinkComponent({ shrink: 'true' });
    document.querySelector('#filled-multiline-static').value = obj.code;
    setOutputText(obj.translation);
  }

  const handleTyping = (event) => {
    setInputText(event.target.value);
  };

  const CopyToClipBoardNormal = (event) => {
    if (!outputText) return;

    const lineLength = 40;
    let copyOutput = outputText[0];
    let readyToCopy = false;
    for (let i = 1; i < outputText.length; i++) {
      if (i % lineLength === 0) readyToCopy = true;
      if (readyToCopy && outputText[i] === ' ') {
        copyOutput += '\n';
        readyToCopy = false;
        continue;
      }
      copyOutput += outputText[i];
    }
    navigator.clipboard.writeText(copyOutput);
  };

  const CopyToClipBoardSudo = (event) => {
    if (!outputText) return;

    const lineLength = 40;
    let copyOutput = outputText[0];
    let readyToCopy = false;
    for (let i = 1; i < outputText.length; i++) {
      if (i % lineLength === 0) readyToCopy = true;
      if (readyToCopy && outputText[i] === ' ') {
        copyOutput += '\n';
        readyToCopy = false;
        continue;
      }
      copyOutput += outputText[i];
    }
    const textToCopy = `/*\n ${copyOutput} \n */`;
    navigator.clipboard.writeText(textToCopy);
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

    const response = await axios.post(requestURI, json, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    setOutputText(response.data);

    retext()
      .use(retextPos) // Make sure to use `retext-pos` before `retext-keywords`.
      .use(retextKeywords)
      .process(outputText)
      .then((data) => {
        console.log('Keywords:');
        data.data.keywords.forEach((keyword) => {
          console.log(toString(keyword.matches[0].node));
        });
      });
  };

  const handleHistoryOpen = () => {
    setHistoryOpen(!open);
  };

  return (
    <>
      {username && (
        <div className='dropdown'>
          <Button onClick={handleHistoryOpen}>Your History</Button>
          {open ? (
            <SearchedResults
              handleElementClick={handleElementClick}
              searched={searched}
            />
          ) : null}
        </div>
      )}
      <main id='BoxContainer' style={{ display: 'flex' }}>
        <UserInput
          shrinkComponent={shrinkComponent}
          inputlanguage={inputLanguage}
          inputText={inputText}
          handleTyping={handleTyping}
          handleSubmit={handleSubmit}
          inputTextLength={inputTextLength}
        />
        <div id='imgWrapper'>
          <img id='shark' src={Shark}></img>
        </div>
        <OutputBox
          outputText={outputText}
          copyNormal={CopyToClipBoardNormal}
          copySudo={CopyToClipBoardSudo}
        />
      </main>
    </>
  );
};

export default BoxContainer;
