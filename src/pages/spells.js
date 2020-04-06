/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import {
  SpellsPhoneTemplateAreas,
  SpellsTabletTemplateAreas,
  SpellsDesktopTemplateAreas,
} from "../window";
import SpellsSection from "../components/site/spells-section";

const Spells = () => {
  return (
    <>
      <div
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          position: "relative",
          width: "100%",
        }}
      >
        <h4>Spells</h4>
      </div>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(auto, auto))",
          gridAutoRows: "auto",
          gridTemplateAreas: [
            SpellsPhoneTemplateAreas,
            SpellsTabletTemplateAreas,
            SpellsDesktopTemplateAreas,
          ],
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <SpellsSection />
      </div>
    </>
  );
};

export default Spells;
