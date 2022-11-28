import React from 'react';
import { TextField } from '@mui/material';

export default function (props) {
  const { outputText } = props;
  console.log(outputText);
  return (
    <div className='boxes' id='Output'>
      <TextField
        multiline
        rows={20}
        placeholder='Plain English'
        variant='filled'
        fullWidth
        readOnly
        value={outputText}
      />
    </div>
  );
}
