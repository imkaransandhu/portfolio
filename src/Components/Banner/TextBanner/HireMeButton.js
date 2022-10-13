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
        webkitBoxShadow: "0 21.5px 26.5px -9.5px #fca422",
        mozBoxShadow: "0 21.5px 26.5px -9.5px #fca422",
        boxShadow: "0 21.5px 26.5px -9.5px #fca422",
      }}
      variant="contained"
    >
      Hire Me
    </Button>
  );
};

export default HireMeButton;
