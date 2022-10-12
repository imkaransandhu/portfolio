import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";

const DesktopMenu = ({ handleCloseNavMenu, pages }) => {
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          columnGap: "2.5rem",
          display: { xs: "none", md: "flex" },
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#000", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Fragment>
  );
};

export default DesktopMenu;
