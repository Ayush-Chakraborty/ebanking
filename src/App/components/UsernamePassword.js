import React, { useRef, useState } from "react";
import { AccountCircle, Lock } from "@mui/icons-material";
import { TextField, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link, useHistory } from "react-router-dom";

export default function UsernamePassword() {
  const theme = useTheme();
  const container = {
    display: "flex",
    alignItems: "flex-end",
    margin: theme.spacing(5),
  };
  const userRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const [accountError, setAccountError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const routeChange = () => {
    setAccountError(false);
    setPinError(false);
    if (userRef.current.value !== "admin") setAccountError(true);
    else if (passRef.current.value !== "pass@1234") setPinError(true);
    else {
      history.push("/account");
      localStorage.setItem("loggedIn", "Yes");
    }
  };
  return (
    <form onSubmit={routeChange}>
      <Box sx={container}>
        <AccountCircle
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          id="input-with-sx"
          label="Username"
          variant="standard"
          required
          fullWidth
          inputRef={userRef}
          error={accountError}
        />
      </Box>
      <Box sx={container}>
        <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Password"
          variant="standard"
          required
          fullWidth
          type="password"
          inputRef={passRef}
          error={pinError}
        />
      </Box>
      <Box
        sx={{
          margin: theme.spacing(5),
          marginBottom: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={routeChange}
          type="submit"
        >
          Login
        </Button>
        <Link to="/register" style={{ all: "unset" }}>
          <Button sx={{ marginTop: theme.spacing(2) }}>Register</Button>
        </Link>
      </Box>
    </form>
  );
}
