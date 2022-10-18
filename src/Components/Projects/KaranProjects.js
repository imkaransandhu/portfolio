import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import CustomTypography from "../SharedComponents/CustomTypography";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import CustomPaddingContext from "./../../Contexts/CustomPaddingContext";
import SectionContext from "../../Contexts/SectionContext";
const KaranProjects = () => {
  const customPadding = useContext(CustomPaddingContext);
  const [section] = useContext(SectionContext);
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: customPadding,
        pt: "3rem",
        textAlign: "center",
        display: section === "Projects" ? "block" : "none",
      }}
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
