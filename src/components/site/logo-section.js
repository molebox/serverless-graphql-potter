/** @jsx jsx */
import { jsx } from "theme-ui";
import { Logo } from "../logo";

const LogoSection = () => {
  return (
    <section
      sx={{
        gridArea: "logo",
        display: "flex",
        alignItems: "center",
        justifyContent: ["start", "center", "center"],
        position: "relative",
        width: "100%",
      }}
    >
      <Logo />
    </section>
  );
};

export default LogoSection;
