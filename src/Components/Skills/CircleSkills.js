import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const CircleSkills = ({ skills, index }) => {
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }} xs={12} md={6}>
      <div className="circle">
        {skills[index].map((skill, index) => {
          return (
            <span key={index} className={`skill-${++index}`}>
              <img src={`./assets/images/skills/${skill}.svg`} alt={skill} />
            </span>
          );
        })}
      </div>
    </Grid>
  );
};

export default CircleSkills;
