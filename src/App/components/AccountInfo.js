import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Paper,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
export default function AccountInfo() {
  const theme = useTheme();
  const containerStyle = {
    flexGrow: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
  };
  const headingStyle = {
    padding: "1.5rem",
    backgroundColor: "#c8cde1",
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  };
  const infoStyle = {
    padding: "1rem",
    flexGrow: 1,
  };
  const [balance, setBalance] = useState(1);
  return (
    <Paper
      sx={{
        minWidth: "500",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.main,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Box sx={containerStyle}>
          <Box sx={headingStyle}>
            <Typography fontWeight={600} fontSize="1.1rem" align="center">
              Account Number
            </Typography>
          </Box>
          <Box sx={infoStyle}>
            <Typography align="center">12345678</Typography>
          </Box>
        </Box>
        <Box sx={containerStyle}>
          <Box sx={headingStyle}>
            <Typography fontWeight={600} fontSize="1.1rem" align="center">
              Account Holder
            </Typography>
          </Box>
          <Box sx={infoStyle}>
            <Typography align="center">John Smith</Typography>
          </Box>
        </Box>
        <Box sx={containerStyle}>
          <Box sx={headingStyle}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={balance}
                label="Currency"
                onChange={(e) => {
                  setBalance(e.target.value);
                }}
                sx={{
                  marginRight: 5,
                }}
              >
                <MenuItem value={1}>GBP</MenuItem>
                <MenuItem value={1.19}>EUR</MenuItem>
                <MenuItem value={1.3}>USD</MenuItem>
              </Select>
            </FormControl>

            <Typography fontWeight={600} fontSize="1.1rem" align="center">
              Balance
            </Typography>
          </Box>
          <Box sx={infoStyle}>
            <Typography align="center">
              {(balance * 10000).toLocaleString("en", { useGrouping: true })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
