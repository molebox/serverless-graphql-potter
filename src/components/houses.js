/** @jsx jsx */
import { jsx } from "theme-ui";
import Griffindor from "./house-banners/griffindor";
import Hufflepuff from "./house-banners/hufflepuff";
import Slytherin from "./house-banners/slytherin";
import Ravenclaw from "./house-banners/ravenclaw";

const Houses = () => (
  <section
    sx={{
      gridArea: "houses",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "2em",
      placeItems: "start",
      height: "100%",
      width: "100%",
      padding: "2em",
    }}
  >
    <Griffindor />
    <Hufflepuff />
    <Slytherin />
    <Ravenclaw />
  </section>
);

export default Houses;
