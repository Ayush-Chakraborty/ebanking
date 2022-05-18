import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import { useTheme } from "@mui/material/styles";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { TextField } from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  // Button,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  // Container,
} from "@mui/material";
import TransactionHistory from "../components/TransactionHistory";
const Main = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) history.replace("/");
  }, [history]);
  const [option, setOption] = useState(1);
  const [startingDate, setStartingDate] = React.useState(
    new Date(Date.now() - 7 * 86400 * 1000)
  );
  const [endingDate, setEndingDate] = React.useState(new Date());

  const theme = useTheme();
  return (
    <>
      <Header />
      <Box Box sx={{ width: "86%", margin: "2rem 7% " }}>
        <AccountInfo />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            color={theme.palette.primary.main}
          >
            Account Statement
          </Typography>
          <Box>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Box
                sx={{
                  display: "flex",
                  gap: 8,
                }}
              >
                <DesktopDatePicker
                  label="Starting Date"
                  inputFormat="dd/MM/yyyy"
                  value={startingDate}
                  onChange={(d) => {
                    setStartingDate(d);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  maxDate={Date.now()}
                  disabled={option !== 4}
                />
                <DesktopDatePicker
                  label="Ending Date"
                  inputFormat="dd/MM/yyyy"
                  value={endingDate}
                  onChange={(d) => {
                    setEndingDate(d);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={startingDate}
                  disabled={option !== 4}
                />

                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Timeline
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={option}
                    label="Currency"
                    onChange={(e) => {
                      const value = e.target.value;
                      setOption(value);
                      if (value === 1) {
                        setEndingDate(new Date());
                        setStartingDate(
                          new Date(Date.now() - 7 * 86400 * 1000)
                        );
                      } else if (value === 2) {
                        setEndingDate(new Date());
                        setStartingDate(
                          new Date(Date.now() - 7 * 2 * 86400 * 1000)
                        );
                      } else if (value === 3) {
                        setEndingDate(new Date());
                        setStartingDate(
                          new Date(Date.now() - 30 * 86400 * 1000)
                        );
                      } else {
                        setEndingDate(new Date());
                        setStartingDate(new Date());
                      }
                    }}
                    sx={{
                      marginRight: 5,
                    }}
                  >
                    <MenuItem value={1}>Last Week</MenuItem>
                    <MenuItem value={2}>Last 2 Weeks</MenuItem>
                    <MenuItem value={3}>Last Month</MenuItem>
                    <MenuItem value={4}>Custom</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </LocalizationProvider>
          </Box>
        </Box>
        <TransactionHistory
          startingDate={startingDate}
          endingDate={endingDate}
        />
      </Box>
    </>
  );
};

export default Main;
