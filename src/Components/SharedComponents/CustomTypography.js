import React from "react";
import Typography from "@mui/material/Typography";

const CustomTypography = ({ color, text, variant }) => {
  return (
    <Typography
      sx={{
        color: { color },
        fontWeight: "700",
        fontSize: "2.5rem",
        mb: "0.5rem",
      }}
      variant={variant}
      gutterBottom
    >
      {text}
    </Typography>
  );
};

export default CustomTypography;
