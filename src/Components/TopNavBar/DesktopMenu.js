import { Button } from "@mui/material";
import { Box } from "@mui/system";

const DesktopMenu = ({ changeSection, pages }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        columnGap: "2.5rem",
        display: { xs: "none", md: "flex" },
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          value={page}
          onClick={changeSection}
          sx={{ my: 2, color: "#000", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopMenu;
