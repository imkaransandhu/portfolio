import "./App.css";
import Banner from "./Components/Banner/Banner";
import KaranSkills from "./Components/Skills/KaranSkills";
import ResponsiveAppBar from "./Components/TopNavBar/ResponsiveAppBar";

function App() {
  const customPadding = { lg: "10rem", md: "5rem", xs: "0" };

  return (
    <div className="App">
      <ResponsiveAppBar customPadding={customPadding} />
      <Banner customPadding={customPadding} />
      <KaranSkills customPadding={customPadding} />
    </div>
  );
}

export default App;
