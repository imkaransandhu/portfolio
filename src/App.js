import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import KaranProjects from "./Components/Projects/KaranProjects";
import KaranSkills from "./Components/Skills/KaranSkills";
import ResponsiveAppBar from "./Components/TopNavBar/ResponsiveAppBar";
import CustomPaddingContext from "./Contexts/CustomPaddingContext";
import SectionContext from "./Contexts/SectionContext";

function App() {
  const customPadding = {
    lg: "10rem",
    md: "5rem",
    xs: "0",
  };

  const [section, setSection] = useState(["banner"]);
  console.log(section);
  const changeSection = (e) => {
    console.log(e.currentTarget.value);
    const sectionToSet = e.currentTarget.value;
    setSection([sectionToSet]);
  };

  return (
    <div className="App">
      <CustomPaddingContext.Provider value={customPadding}>
        <ResponsiveAppBar changeSection={changeSection} />
        <SectionContext.Provider value={section}>
          <Banner />
          <KaranSkills />
          <KaranProjects />
        </SectionContext.Provider>
        <Footer />
      </CustomPaddingContext.Provider>
    </div>
  );
}

export default App;
