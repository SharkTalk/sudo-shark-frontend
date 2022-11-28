import React from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box,
} from '@mui/material';

function SignInButtons() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log('submitted', data.get('username'), data.get('password'));
  };

  return (
    <div id='SignInButtons'>
      <Button id='signin' variant='contained' color='secondary' onClick={handleClickOpen}>
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='off'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='password'
              label='Password'
              name='password'
              autoComplete='off'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
            >
              Sign In
            </Button>
          </Box>
          {/* <form>
            <label></label>
            <input type='text' id='username' name='username' />
          </form> */}

        </DialogContent>
      </Dialog>
      <Button id='logout' color='secondary'>
        Log Out
      </Button>
    </div>
  );
}

export default SignInButtons;
