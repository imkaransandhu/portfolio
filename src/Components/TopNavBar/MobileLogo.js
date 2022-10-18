import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button, Typography } from "@mui/material";

const MobileLogo = ({ changeSection }) => {
  return (
    <Button
      value="banner"
      onClick={changeSection}
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        fontSize: "1.3rem",
        textDecoration: "none",
        p: 0,
      }}
    >
      <PersonPinIcon sx={{ mr: 1 }} />
      <Typography
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          fontSize: "1.3rem",
          textDecoration: "none",
          p: 0,
        }}
      >
        PORTFOLIO
      </Typography>
    </Button>
  );
};

export default MobileLogo;
