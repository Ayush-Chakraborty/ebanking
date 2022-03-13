import React from "react";
import { Paper, Typography, TextField, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: `${theme.spacing(2)} 0`,
    },
    "& .MuiButton-root": {
      margin: `${theme.spacing(2)} 0`,
    },
  },
}));
export default function Register() {
  const classes = useStyles();
  return (
    <Paper
      sx={{
        width: "90%",
        margin: "2rem auto",
        maxWidth: 500,
        padding: "2rem",
      }}
      className={classes.root}
    >
      <form>
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          color="#2f3060"
          gutterBottom
        >
          Create New Account
        </Typography>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          label="6 digit Pin"
          variant="outlined"
          fullWidth
          required
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Account Number"
          variant="outlined"
          fullWidth
          required
          type="number"
        />
        {/* <Box
        sx={{
          margin: theme.spacing(5),
          marginBottom: theme.spacing(1),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        
      >
        <Button sx={{ marginTop: theme.spacing(2) }}>Register</Button>
      </Box> */}
        <Button variant="contained" fullWidth>
          Register
        </Button>
      </form>
    </Paper>
  );
}
