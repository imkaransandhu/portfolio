import { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import TextBanner from "./TextBanner/TextBanner";
import ImageBanner from "./ImageBanner";
import CustomPaddingContext from "./../../Contexts/CustomPaddingContext";
import SectionContext from "../../Contexts/SectionContext";

const Banner = () => {
  const customPadding = useContext(CustomPaddingContext);
  const [section] = useContext(SectionContext);
  console.log(section);
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: customPadding,
        display: section === "banner" ? "flex" : "none",
      }}
    >
      <Grid container>
        <TextBanner />
        <ImageBanner />
      </Grid>
    </Box>
  );
};

export default Banner;
