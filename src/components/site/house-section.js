/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  gryffindorColors,
  hufflepuffColors,
  slytherinColors,
  ravenclawColors,
} from "./../../helpers/helpers";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const House = styled.a`
  color: #fff;

  &:hover {
    background-image: ${(props) => props.house};
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

const HouseSection = ({ getHouse }) => {
  return (
    <section
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <ul
        sx={{
          listStyle: "none",
          cursor: "crosshair",
          fontFamily: "heading",
          fontSize: "1em",
          display: "flex",
          flexDirection: ["column", "row", "row"],
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        <motion.li
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          <House
            onClick={() => getHouse("gryffindor")}
            house={gryffindorColors}
          >
            Gryffindor
          </House>
        </motion.li>
        <motion.li
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.4,
          }}
        >
          <House
            onClick={() => getHouse("hufflepuff")}
            house={hufflepuffColors}
          >
            Hufflepuff
          </House>
        </motion.li>
        <motion.li
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.6,
          }}
        >
          <House onClick={() => getHouse("slytherin")} house={slytherinColors}>
            Slytherin
          </House>
        </motion.li>
        <motion.li
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.8,
          }}
        >
          <House onClick={() => getHouse("ravenclaw")} house={ravenclawColors}>
            Ravenclaw
          </House>
        </motion.li>
      </ul>
    </section>
  );
};

export default HouseSection;
