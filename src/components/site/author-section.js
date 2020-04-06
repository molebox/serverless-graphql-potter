/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { houseEmoji, spellsEmoji } from "./../../helpers/helpers";
import styled from "@emotion/styled";
import { wizardEmoji } from "./../../helpers/helpers";

const ExternalLink = styled(Link)`
  color: #fff;

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

const AuthorSection = () => {
  return (
    <section
      sx={{
        gridArea: "author",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <h1
        sx={{
          fontFamily: "heading",
          color: "white",
          letterSpacing: "text",
          fontSize: ["3em", "3em", "5em"],
        }}
      >
        Serverless Potter
      </h1>
      {/* <h2
        sx={{
          fontFamily: "heading",
          color: "white",
          fontSize: "2em",
          letterSpacing: "body",
        }}
      >
        Author: Richard Haines
      </h2> */}
      <div
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-start",
          width: "300px",
          marginTop: "3em",
        }}
      >
        <ExternalLink
          sx={{
            fontFamily: "heading",
            fontSize: "2.5em",
            // color: 'white',
            marginRight: "2em",
          }}
          to="/houses"
        >
          Houses
        </ExternalLink>
        <ExternalLink
          sx={{
            fontFamily: "heading",
            fontSize: "2.5em",
            color: "white",
          }}
          to="/spells"
        >
          Spells
        </ExternalLink>
      </div>
      <p
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          color: "white",
          marginTop: "2em",
          width: ["300px", "500px", "900px"],
        }}
      >
        This is a side project that i used to understand how serverless
        functions work. I decided to use the potter api as i love the world of
        harry potter and im an adult, and thats totally ok because harry potter
        is brilliant {wizardEmoji} Built with Gatsby, Netlify functions, Apollo
        and FaunaDB. Data provided via the Potter API.
      </p>
      <p
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          color: "white",
          marginTop: "1em",
          width: ["300px", "500px", "900px"],
        }}
      >
        Built with Gatsby, Netlify functions, Apollo and FaunaDB. Data provided
        via the Potter API.
      </p>
      <p
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          color: "white",
          marginTop: "1em",
          width: ["300px", "500px", "900px"],
        }}
      >
        Select Houses or spells to begin exploring potter stats!
      </p>
      <p
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          color: "white",
          marginTop: "1em",
          width: ["300px", "500px", "900px"],
        }}
      >
        author: richard haines
      </p>
      <a
        sx={{
          fontFamily: "heading",
          letterSpacing: "body",
          fontSize: "2em",
          color: "white",
          marginTop: "1em",
          width: "900px",
        }}
        href="https://github.com/molebox/serverless-graphql-potter"
      >
        github: serverless-graphql-potter
      </a>
    </section>
  );
};

export default AuthorSection;
