import React from 'react';
import { Button, TextField } from '@mui/material';

export default () => {
  return (
    <>
      <div id='Output'>
        <TextField
          multiline
          rows={20}
          placeholder='Plain English'
          variant='filled'
          fullWidth
        />
      </div>
    </>
  );
};
