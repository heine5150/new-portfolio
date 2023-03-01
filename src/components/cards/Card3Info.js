import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

function Card3Info({ handleClose }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ minHeight: 300, width: 600 }}>
        <Typography variant="body1">Hello from Card 3 Info</Typography>
        <Button onClick={handleClose}>Close</Button>
      </Paper>
    </Box>
  );
}

export default Card3Info;