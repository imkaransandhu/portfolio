import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "./circle.scss";
import { useContext } from "react";
import CircleSkills from "./CircleSkills";
import CustomTypography from "../SharedComponents/CustomTypography";
import CustomPaddingContext from "./../../Contexts/CustomPaddingContext";
import SectionContext from "./../../Contexts/SectionContext";

const skills = [
  ["html5", "css3", "javascript", "react", "bootstrap"],
  ["jquery", "nodejs", "es6", "github", "material-ui"],
];

const KaranSkills = () => {
  const customPadding = useContext(CustomPaddingContext);
  const [section] = useContext(SectionContext);
  console.log(section);

  return (
    <Box
      sx={{
        flexGrow: 1,
        px: customPadding,
        pt: "3rem",
        textAlign: "center",
        display: section === "Skills" ? "block" : "none",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column" }} container>
        <CustomTypography color="#212121" variant="h3" text="Programming's" />
        <CustomTypography color="#fca422" variant="h3" text="I'm Good At 👍" />
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
