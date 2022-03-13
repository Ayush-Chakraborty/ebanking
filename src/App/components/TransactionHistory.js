import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";
import rawData from "../data";
const row = ["Date", "Transaction Id", "Debit", "Credit", "Balance"];
export default function TransactionHistory({ startingDate, endingDate }) {
  const theme = useTheme();
  const containerStyle = {
    flexGrow: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
  };
  const headingStyle = {
    padding: "1.1rem",
    backgroundColor: "#c8cde1",
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const infoStyle = {
    padding: "1rem",
    flexGrow: 1,
  };
  const [data, setData] = useState({
    Date: [],
    "Transaction Id": [],
    Debit: [],
    Credit: [],
    Balance: [],
  });
  useEffect(() => {
    const newData = {
      Date: [],
      "Transaction Id": [],
      Debit: [],
      Credit: [],
      Balance: [],
    };
    const start = new Date(startingDate);
    const end = new Date(endingDate);

    const m1 = start.getMonth();
    const m2 = end.getMonth();

    const d1 = start.getDate();
    const d2 = end.getDate();

    for (let i = 0; i < rawData.Date.length; i++) {
      const date = new Date(rawData.Date[i]);

      const m = date.getMonth();
      const d = date.getDate();

      if (m < m1 || m > m2) continue;
      if (m === m1 && d < d1) continue;
      if (m === m2 && d > d2) continue;

      for (let key of row) newData[key].push(rawData[key][i]);
    }
    setData(newData);
  }, [startingDate, endingDate]);
  return (
    <Paper
      sx={{
        minWidth: "500",
        overflowX: "auto",
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.main,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {row.map((title) => (
          <Box sx={containerStyle}>
            <Box sx={headingStyle}>
              <Typography fontWeight={600} fontSize="1.1rem" align="center">
                {title}
              </Typography>
            </Box>
            {data[title].map((d) => {
              if (title === "Date") {
                d = new Date(d);
                let dd = String(d.getDate()).padStart(2, "0");
                let mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
                let yyyy = d.getFullYear();

                d = dd + "/" + mm + "/" + yyyy;
              }
              return (
                <Box sx={infoStyle}>
                  <Typography align="center">{d}</Typography>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
