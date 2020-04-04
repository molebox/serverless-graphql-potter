/** @jsx jsx */
import { jsx } from "theme-ui";
import { Logo } from "../logo";

const LogoSection = () => {
  return (
    <section
      sx={{
        gridArea: "logo",
        borderRight: "solid 2px",
        borderColor: "white",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        paddingTop: "0.5em",
      }}
    >
      <Logo />
    </section>
  );
};

export default LogoSection;
