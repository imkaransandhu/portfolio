import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import DesktopLogo from "./DesktopLogo";
import MobileLogo from "./MobileLogo";
import FaceLogoIcon from "./FaceLogoIcon";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import CustomPaddingContext from "./../../Contexts/CustomPaddingContext";

const pages = ["Skills", "Projects", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ changeSection }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const customPadding = useContext(CustomPaddingContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{ px: customPadding, backgroundColor: "#ffffff", color: "#000" }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopLogo changeSection={changeSection} />
          <MobileMenu
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
          />
          <MobileLogo changeSection={changeSection} />
          <DesktopMenu changeSection={changeSection} pages={pages} />
          <FaceLogoIcon
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            settings={settings}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
