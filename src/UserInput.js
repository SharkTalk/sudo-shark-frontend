import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Shark from './static/shark.png';

const inlineStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '1em',
};

export default function (props) {
  console.log(props.handleSubmit);
  const characterCount = `${props.inputTextLength} / 250`;
  return (
    <div className='boxes' id='Input' style={inlineStyle}>
      <TextField
        InputLabelProps={{shrink: true}}
        inputProps={{ maxLength: 250 }}
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
        helperText={characterCount}
      />
      <Button
        style={{ paddingTop: '10px' }}
        variant='contained'
        size='small'
        onClick={(event) => props.handleSubmit(event)}
      >
        Sharkify
      </Button>
    </div>
  );
}
