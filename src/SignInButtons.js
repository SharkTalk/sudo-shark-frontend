import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const SignInButtons = () => {
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
};

export default SignInButtons;
