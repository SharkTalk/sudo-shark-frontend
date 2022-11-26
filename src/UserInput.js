import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Shark from './static/shark.png';

const inlineStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '1em',
};

export default () => {
  return (
    <>
      <div id='Input' style={inlineStyle}>
        <TextField
          style={{ fontFamily: 'Monospace' }}
          id='filled-multiline-static'
          label='Paste your Code'
          multiline
          rows={20}
          variant='filled'
          fullWidth
          placeholder='Javascript'
        />
        <Button variant='contained' src={Shark}>
          Commentify
        </Button>
      </div>
    </>
  );
};
