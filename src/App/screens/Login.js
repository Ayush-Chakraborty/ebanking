import {
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import UsernamePassword from "../components/UsernamePassword";
import { useTheme } from "@emotion/react";
import AccountPin from "../components/AccountPin";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const animationRef = useRef();
  const theme = useTheme();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      history.push("/account");
    }
    Lottie.loadAnimation({
      container: animationRef.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/banking.json"),
    });
  }, [history]);
  const [loginState, setLoginState] = useState(false);
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div ref={animationRef}></div>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Paper
            style={{
              width: "85%",
              maxWidth: 450,
              marginBottom: theme.spacing(3),
              paddingTop: theme.spacing(5),
              paddingBottom: theme.spacing(3),
            }}
          >
            <Typography
              variant="h3"
              align="center"
              fontWeight={600}
              color="#2f3060"
            >
              E-Banking
            </Typography>
            {loginState ? <UsernamePassword /> : <AccountPin />}

            <FormGroup
              sx={{
                marginRight: theme.spacing(5),
                marginLeft: theme.spacing(5),
                color: theme.primary,
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    aria-label="Login using username and passowrd"
                    onChange={(e) => {
                      setLoginState(e.target.checked);
                    }}
                  />
                }
                label="Login using username and passowrd"
                labelPlacement="start"
              />
            </FormGroup>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
