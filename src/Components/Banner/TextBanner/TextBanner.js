import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import ObjectiveKaran from "./ObjectiveKaran";
import HireMeButton from "./HireMeButton";
import CustomTypography from "../../SharedComponents/CustomTypography";

const TextBanner = () => {
  return (
    <Grid
      sx={{
        pl: { lg: "24px" },
        py: { md: "5rem", xs: "2rem" },
        textAlign: { xs: "center", md: "left" },
      }}
      xs={12}
      md={5}
    >
      <CustomTypography variant="h2" color="#212121" text="Hy I'm" />
      <CustomTypography variant="h2" color="#fca422" text="Karan Singh" />
      <ObjectiveKaran />
      <HireMeButton />
    </Grid>
  );
};

export default TextBanner;
