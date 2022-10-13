import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import CustomTypography from "../SharedComponents/CustomTypography";
import ProjectGallery from "./ProjectGallery/ProjectGallery";

const KaranProjects = ({ customPadding }) => {
  return (
    <Box
      sx={{ flexGrow: 1, px: customPadding, pt: "3rem", textAlign: "center" }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }} container>
        <CustomTypography color="#212121" variant="h3" text="Project's" />
        <CustomTypography color="#fca422" variant="h3" text="I'm Proud Of 😎" />
      </Grid>
      <Grid xs={12} container>
        <ProjectGallery />
      </Grid>
    </Box>
  );
};

export default KaranProjects;
