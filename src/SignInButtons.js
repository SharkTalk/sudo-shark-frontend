import React from 'react';
import {
  Button, TextField, Dialog, DialogContent, DialogTitle, Box,
} from '@mui/material';
import axios from 'axios';

function SignInButtons(props) {
  const { setUsername, stateUsername } = props;

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  /* const [isLoggedIn, setLoginStatus] = React.useState(false); */

  const handleClickLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleClickSignUpOpen = () => {
    setOpenSignUp(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestURI = `${process.env.BACKEND_USER_URI}/login`;
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    const login = async () => {
      const response = await axios.post(requestURI, {
        username,
        password,
      });
      // if username or pw incorrect, display message saying so
      console.log(response.data);
      // change state of username with success
      setUsername(response.data);
      // close dialog
      setOpenLogin(false);
      // remove sign in and sign up bottons
    };
    login();
    console.log('submitted', username, password);
    // setLoginStatus(true);
    // snackbar
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const requestURI = `${process.env.BACKEND_USER_URI}/new`;
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPass = data.get('confirm-password');
    // check that pw and confirm pw match
    if (password !== confirmPass) {
      console.log('passwords do not match');
      return;
    }
    // check if username exists
    // if all pass, save new user
    const signUp = async () => {
      const response = await axios.post(requestURI, {
        username,
        password,
        email,
      });
      console.log(response);
      setUsername(response.data);
      setOpenSignUp(false);
    };
    signUp();
    console.log('signedup');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // change state of username to empty string
    setUsername('');
    // setLoginStatus(false);
  };

  if (stateUsername !== '') {
    return (
      <div id='SignInButtons'>

        <Button id='logout' variant='contained' color='secondary' onClick={handleLogout}>
          Log Out
        </Button>

      </div>
    );
  }
  return (
    <div id='SignInButtons'>
      <Button id='signin' variant='contained' color='secondary' onClick={handleClickLoginOpen}>
        Sign In
      </Button>
      <Dialog open={openLogin} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Box component='form' onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
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
              type='password'
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

        </DialogContent>
      </Dialog>

      <Button id='signup' color='secondary' onClick={handleClickSignUpOpen}>
        Sign Up
      </Button>
      <Dialog open={openSignUp} onClose={handleSignUpClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <Box component='form' onSubmit={handleSignUpSubmit} noValidate sx={{ mt: 1 }}>
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
              id='email'
              label='Email (optional)'
              name='email'
              autoComplete='off'
            />
            <TextField
              type='password'
              margin='normal'
              required
              fullWidth
              id='password'
              label='Password'
              name='password'
              autoComplete='off'
            />
            <TextField
              type='password'
              margin='normal'
              required
              fullWidth
              id='confirm-password'
              label='Confirm Password'
              name='confirm-password'
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

        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SignInButtons;
