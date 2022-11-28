import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

function SignInButtons() {
  function SignInButtons() {
    return (
      <div id="SignInButtons">
        <Button id="signin" variant="contained" color="secondary">
          Sign In
        </Button>
        <Button id="logout" color="secondary">
          Log Out
        </Button>
      </div>
    );
  }
}

export default SignInButtons;
