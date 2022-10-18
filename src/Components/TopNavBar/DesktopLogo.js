import React, { Fragment } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";

const DesktopLogo = ({ changeSection }) => {
  return (
    <Fragment>
      <PersonPinIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Button
        value={"banner"}
        onClick={changeSection}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PORTFOLIO
      </Button>
    </Fragment>
  );
};

export default DesktopLogo;
