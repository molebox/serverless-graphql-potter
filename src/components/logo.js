/** @jsx jsx */
import { jsx } from "theme-ui";
import HarryPotterLogo from "../assets/svg-silhouette-harry-potter-4-transparent.svg.svg";

export const Logo = () => (
  <HarryPotterLogo
    sx={{
      gridArea: "logo",
      height: "700px",
      width: "600px",
      margin: "2em",
      position: "relative",
    }}
  />
);
