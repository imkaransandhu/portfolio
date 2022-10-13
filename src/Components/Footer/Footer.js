import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import CustomTypography from "../SharedComponents/CustomTypography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({ customPadding }) => {
  return (
    <Box
      sx={{ flexGrow: 1, px: customPadding, py: "1rem", textAlign: "center" }}
    >
      <Grid container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            columnGap: "1rem",
          }}
          xs={12}
          md={6}
        >
          <CustomTypography
            color="#212121"
            size={"1.5rem"}
            variant="h5"
            text="Developed By"
          />
          <CustomTypography
            color="#fca422"
            size={"1.5rem"}
            variant="h5"
            text="Karan Singh"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            columnGap: "1rem",
          }}
          xs={12}
          md={6}
        >
          <LinkedInIcon fontSize="large" />
          <GitHubIcon fontSize="large" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
