import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const CircleSkills = ({ skills, index }) => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} md={6}>
      <div className="circle">
        {skills[index].map((skill, index) => {
          return (
            <BootstrapTooltip key={index} title={skill}>
              <Button className={`skills skill-${++index}`}>
                <img
                  src={`./portfolio/assets/images/skills/${skill}.svg`}
                  alt={skill}
                />
              </Button>
            </BootstrapTooltip>
          );
        })}
      </div>
    </Grid>
  );
};

export default CircleSkills;
