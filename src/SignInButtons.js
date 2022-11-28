import React from 'react';
import { Button } from '@mui/material';

function SignInButtons() {
  return (
    <div id='SignInButtons'>
      <Button id='signin' variant='contained' color='secondary'>
        Sign In
      </Button>
      <Button id='logout' color='secondary'>
        Log Out
      </Button>
    </div>
  );
}

export default SignInButtons;
