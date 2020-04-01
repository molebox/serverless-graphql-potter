/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const DeckContainer = ({ children }) => {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
        gridArea: "intro",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default DeckContainer;
