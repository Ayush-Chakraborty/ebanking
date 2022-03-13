import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button, Paper, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Box } from "@mui/system";
import SelfTransfer from "../components/SelfTransfer";
import OtherTransfer from "../components/OtherTransfer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

export default function Transfer() {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) history.replace("/");
  }, []);
  const theme = useTheme();
  const [alignment, setAlignment] = useState("savings");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box
        sx={{
          margin: "2rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color={theme.palette.primary.main}
        >
          Transfer Money
        </Typography>
      </Box>
      <Box
        sx={{
          width: "86%",
          margin: "2rem 7% ",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            maxWidth: 500,
            overflowX: "auto",
          }}
          className={classes.root}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            fullWidth
          >
            <ToggleButton value="savings">To Savings Account</ToggleButton>
            <ToggleButton value="other">To Other User</ToggleButton>
          </ToggleButtonGroup>
          <Box
            sx={{
              padding: "1rem 2rem",
            }}
          >
            {alignment === "savings" ? <SelfTransfer /> : <OtherTransfer />}
            <Button variant="contained" fullWidth>
              Transfer
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
