import React from "react";
import { Button } from "@mui/material";
const HireMeButton = () => {
  return (
    <Button
      sx={{
        fontWeight: 600,
        backgroundColor: "#fca422",
        mt: "2rem",
        borderRadius: "10rem",
      }}
      variant="contained"
    >
      Hire Me
    </Button>
  );
};

export default HireMeButton;
