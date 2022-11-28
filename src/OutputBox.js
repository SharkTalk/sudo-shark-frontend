import React from 'react';
import { TextField, Button, Grid, ButtonGroup } from '@mui/material';

const inlineStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '1em',
};

export default function (props) {
  console.log(props.outputText);
  return (
    <div id='Output' className='boxes' style={inlineStyle}>
      <TextField
        multiline
        rows={20}
        placeholder='Plain English'
        variant='filled'
        fullWidth
        readOnly
        value={props.outputText}
        helperText='Copy text to clipboard'
      />
      <ButtonGroup
        container
        id='CopyButtons'
        fullwidth
        sx={{
          display: 'inline-flex',
          justifyContent: 'center',
        }}
      >
        <Button
          style={{ paddingTop: '10px', margin: 2 }}
          variant='contained'
          size='large'
          onClick={() => props.copySudo()}
          fullwidth='true'
        >
          Copy as Sudo Code
        </Button>
        <Button
          style={{ paddingTop: '10px', margin: 2 }}
          variant='contained'
          size='large'
          onClick={() => props.copyNormal()}
          fullwidth='true'
        >
          Copy Explanation
        </Button>
      </ButtonGroup>
    </div>
  );
}
