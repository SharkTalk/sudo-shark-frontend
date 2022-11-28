import React from 'react';
import { TextField } from '@mui/material';

export default (props) => {
  console.log(props.outputText);
  return (
    <>
      <div id='Output'>
        <TextField
          multiline
          rows={20}
          placeholder='Plain English'
          variant='filled'
          fullWidth
          readOnly
          value={props.outputText}
        />
      </div>
    </>
  );
};
