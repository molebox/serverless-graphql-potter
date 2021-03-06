/** @jsx jsx */
import { jsx } from "theme-ui";
import Gryffindor from "./gryffindor";
import Hufflepuff from "./hufflepuff";
import Slytherin from "./slytherin";
import Ravenclaw from "./ravenclaw";

const Houses = ({ getHouse, selectedHouse }) => (
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
    <Gryffindor getHouse={getHouse} selectedHouse={selectedHouse} />
    <Hufflepuff getHouse={getHouse} selectedHouse={selectedHouse} />
    <Slytherin getHouse={getHouse} selectedHouse={selectedHouse} />
    <Ravenclaw getHouse={getHouse} selectedHouse={selectedHouse} />
  </section>
);

export default Houses;
