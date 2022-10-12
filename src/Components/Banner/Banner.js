import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextBanner from "./TextBanner/TextBanner";
import ImageBanner from "./ImageBanner";

const Banner = ({ customPadding }) => {
  return (
    <Box sx={{ flexGrow: 1, px: customPadding }}>
      <Grid container>
        <TextBanner />
        <ImageBanner />
      </Grid>
    </Box>
  );
};

export default Banner;
