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
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Logo />
    </section>
  );
};

export default LogoSection;
