/** @jsx jsx */
import { jsx } from "theme-ui";

const SpellsSection = () => {
  return (
    <section
      sx={{
        gridArea: "spells",
        borderLeft: "solid 2px",
        borderColor: "white",
        display: "grid",
        gridTemplateRows: "100px 1fr",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "solid 2px",
          borderColor: "white",
        }}
      >
        <p
          sx={{
            color: "white",
            fontFamily: "heading",
            fontSize: "2em",
          }}
        >
          Spells
        </p>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          sx={{
            color: "white",
            fontFamily: "heading",
            fontSize: "2em",
          }}
        >
          Coming soon..
        </p>
      </div>
    </section>
  );
};

export default SpellsSection;
