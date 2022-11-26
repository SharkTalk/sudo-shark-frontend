import React from 'react';
import BoxContainer from './BoxContainer';
import SignInButtons from './SignInButtons';

const App = (props) => {
  return (
    <>
      <div id='header'>
        <h1>Sudo Shark</h1>
        <SignInButtons />
      </div>
      <BoxContainer />
    </>
  );
};

export default App;
