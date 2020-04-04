/** @jsx jsx */
import { jsx } from "theme-ui";
import HarryPotterLogo from "../assets/svg-silhouette-harry-potter-4-transparent.svg.svg";

export const Logo = () => (
  <HarryPotterLogo
    sx={{
      height: "100px",
      width: "100px",
      padding: "1em",
    }}
  />
);
