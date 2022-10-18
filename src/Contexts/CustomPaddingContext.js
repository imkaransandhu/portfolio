import { createContext } from "react";

const CustomPaddingContext = createContext({
  lg: "10rem",
  md: "5rem",
  xs: "0",
});

export default CustomPaddingContext;
