import React from "react";
import { TextField } from "@mui/material";

export default function SelfTransfer() {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        fullWidth
        required
        type="number"
      />
      <TextField
        id="outlined-basic"
        label="6-digit Pin"
        variant="outlined"
        fullWidth
        required
        type="number"
      />
      <TextField
        id="outlined-basic"
        label="Confirm Pin"
        variant="outlined"
        fullWidth
        required
        type="number"
      />
    </form>
  );
}
