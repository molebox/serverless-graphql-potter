/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HarryPotterLogo from "../../assets/svg-silhouette-harry-potter-4-transparent.svg.svg";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Background from "./../background";

const PageLink = styled(Link)`
  color: #fff;

  & > p {
    text-decoration: line-through;
  }

  &:hover {
    background-image: linear-gradient(
      90deg,
      rgba(127, 9, 9, 1) 0%,
      rgba(255, 197, 0, 1) 12%,
      rgba(238, 225, 23, 1) 24%,
      rgba(0, 0, 0, 1) 36%,
      rgba(13, 98, 23, 1) 48%,
      rgba(170, 170, 170, 1) 60%,
      rgba(0, 10, 144, 1) 72%,
      rgba(148, 119, 45, 1) 84%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

const Header = ({ location }) => {

  const link = React.useRef(null);

  React.useEffect(() => {
    if (location.pathname === "/houses") {
      link.current = (
        <PageLink
          sx={{
            fontFamily: "heading",
            fontSize: "2em",
            color: "white",
            position: "relative",
            alignSelf: "center",
          }}
          to="/spells"
        >
          Spells
        </PageLink>
      );
    } else if (location.pathname === "/spells") {
      link.current = (
        <PageLink
          sx={{
            fontFamily: "heading",
            fontSize: "2em",
            color: "white",
            position: "relative",
            alignSelf: "center",
          }}
          to="/houses"
        >
          houses
        </PageLink>
      );
    }
  }, [location]);

  return (
    <section
      sx={{
        gridArea: "header",
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        position: "relative",
      }}
    >
      <Background />
      <Link to="/">
        <HarryPotterLogo
          sx={{
            height: "100px",
            width: "100px",
            padding: "1em",
            position: "relative",
          }}
        />
      </Link>
      {link.current}
    </section>
  );
};

export default Header;
