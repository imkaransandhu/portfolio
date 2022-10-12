import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./circle.scss";
import React from "react";
import CircleSkills from "./CircleSkills";
import CustomTypography from "../SharedComponents/CustomTypography";

const skills = [
  ["html5", "css3", "javascript", "react", "bootstrap"],
  ["jquery", "nodejs", "es6", "github", "material-ui"],
];

const KaranSkills = ({ customPadding }) => {
  return (
    <Box
      sx={{ flexGrow: 1, px: customPadding, py: "5rem", textAlign: "center" }}
    >
      <Grid
        sx={{ display: "flex", flexDirection: "column", py: "2rem" }}
        container
      >
        <CustomTypography color="#212121" variant="h3" text="Programming's" />
        <CustomTypography color="#fca422" variant="h3" text="I'm Good At 🙃" />
      </Grid>
      <Grid sx={{ py: "2rem" }} container>
        {skills.map((skillArray, index) => {
          return <CircleSkills key={index} skills={skills} index={index} />;
        })}
      </Grid>
    </Box>
  );
};

export default KaranSkills;
