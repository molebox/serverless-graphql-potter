/** @jsx jsx */
import { jsx } from "theme-ui";
import HarryPotterLogo from "../assets/HP-logo.svg";

export const Logo = () => (
  <div
    sx={{
      gridArea: "logo",
    }}
  >
    <HarryPotterLogo
      sx={{
        height: "700px",
        width: "600px",
        margin: "2em",
      }}
    />
  </div>
);
