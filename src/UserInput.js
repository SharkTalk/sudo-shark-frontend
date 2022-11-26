import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Shark from './static/shark.png';

const inlineStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '1em',
};

export default (props) => {
  return (
    <>
      <div id='Input' style={inlineStyle}>
        <TextField
          style={{ fontFamily: 'Monospace' }}
          name='input Text'
          id='filled-multiline-static'
          label='Paste your Code'
          multiline
          rows={20}
          variant='filled'
          fullWidth
          placeholder='Javascript'
          onChange={(event) => {
            props.handleTyping(event);
          }}
        />
        <Button
          variant='contained'
          src={Shark}
          onClick={(event) => props.handleSubmit(event)}
        >
          Sharkify
        </Button>

        <p>{props.inputTextLength} / 250</p>
      </div>
    </>
  );
};
