/** @jsx jsx */
import { jsx } from "theme-ui";

const AuthorSection = () => {
  return (
    <section
      sx={{
        gridArea: "author",
        padding: "1em",
      }}
    >
      <h1
        sx={{
          fontFamily: "heading",
          color: "white",
          letterSpacing: "text",
          fontSize: "3em",
        }}
      >
        Serverless Potter
      </h1>
      <h2
        sx={{
          fontFamily: "heading",
          color: "white",
          fontSize: "2em",
          letterSpacing: "body",
        }}
      >
        Author: Richard Haines
      </h2>
      <h3
        sx={{
          fontFamily: "heading",
          color: "white",
          fontSize: "1.4em",
          letterSpacing: "body",
        }}
      >
        Stack: Gatsby, Theme-ui, FaunaDB, Apollo and Netlify
      </h3>
    </section>
  );
};

export default AuthorSection;
