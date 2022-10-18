import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Typography } from "@mui/material";
import React, { Fragment } from "react";

const MobileLogo = ({ changeSection }) => {
  return (
    <Fragment>
      <PersonPinIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={changeSection}
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PORTFOLIO
      </Typography>
    </Fragment>
  );
};

export default MobileLogo;
