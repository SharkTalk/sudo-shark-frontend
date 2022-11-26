import React from 'react';
import { Button, TextField } from '@mui/material';

const inlineStyle = {
  display: 'flex',
  paddingBottom: '1em',
};

export default () => {
  return (
    <>
      <div style={inlineStyle}>
        <TextField
          id='filled-multiline-static'
          label='Javascript'
          multiline
          rows={12}
          defaultValue='Default Value'
          variant='filled'
          fullWidth
        />
      </div>
      <Button variant='contained'>Commentify</Button>
    </>
  );
};
