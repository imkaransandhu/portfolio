import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const ImageBanner = () => {
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      xs={12}
      md={7}
    >
      <img
        style={{ transform: "scale(1.2)", height: "20rem", width: "80%" }}
        src="./assets/images/KaranFace.svg"
        alt="Karan Face SVG"
      />
    </Grid>
  );
};

export default ImageBanner;
