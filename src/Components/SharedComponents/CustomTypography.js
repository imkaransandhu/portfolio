import React from "react";
import Typography from "@mui/material/Typography";

const CustomTypography = ({ color, text, variant, size }) => {
  return (
    <Typography
      sx={{
        color: { color },
        fontWeight: "700",
        fontSize: size ? size : "2.5rem",
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
