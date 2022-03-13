import React, { useRef, useState } from "react";
import { AccountCircle, Lock } from "@mui/icons-material";
import { TextField, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link, useHistory } from "react-router-dom";
export default function AccountPin() {
  const theme = useTheme();
  const container = {
    display: "flex",
    alignItems: "flex-end",
    margin: theme.spacing(5),
  };
  const history = useHistory();
  const accountRef = useRef();
  const pinRef = useRef();
  const [accountError, setAccountError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const routeChange = () => {
    setAccountError(false);
    setPinError(false);
    if (accountRef.current.value !== "111111") setAccountError(true);
    else if (pinRef.current.value !== "123456") setPinError(true);
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
          label="Account Number"
          variant="standard"
          required
          fullWidth
          type="number"
          inputRef={accountRef}
          error={accountError}
        />
      </Box>
      <Box sx={container}>
        <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="6 digit Pin"
          variant="standard"
          required
          fullWidth
          type="password"
          inputRef={pinRef}
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
