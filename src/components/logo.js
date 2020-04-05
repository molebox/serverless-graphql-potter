/** @jsx jsx */
import { jsx } from "theme-ui";
import HarryPotterLogo from "../assets/svg-silhouette-harry-potter-4-transparent.svg.svg";

export const Logo = () => (
  <HarryPotterLogo
    sx={{
      height: ["200px", "300px", "500px"],
      width: ["200px", "300px", "500px"],
      padding: "1em",
      position: "relative",
    }}
  />
);
