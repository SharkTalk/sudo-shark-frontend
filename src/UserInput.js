import React from 'react';
import { Button, TextField } from '@mui/material';

const inlineStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '1em',
};

export default function (props) {
  const { inputTextLength, handleSubmit, handleTyping } = props;
  console.log(handleSubmit);
  const characterCount = `${inputTextLength} / 250`;
  return (
    <div id='Input' style={inlineStyle}>
      <TextField
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
          handleTyping(event);
        }}
        helperText={characterCount}
      />
      <Button
        style={{ paddingTop: '10px' }}
        variant='contained'
        size='small'
        onClick={(event) => handleSubmit(event)}
      >
        Sharkify
      </Button>
    </div>
  );
}
