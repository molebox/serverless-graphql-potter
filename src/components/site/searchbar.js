/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const Input = styled.input`
  padding: 0.4em;
`;

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2em",
      }}
    >
      <Input
        sx={{
          color: "greyBlack",
          fontFamily: "heading",
          fontSize: "0.8em",
          fontWeight: "bold",
          letterSpacing: "body",
          border: "1px solid",
          borderColor: "accent",
          width: "300px",
          height: "50px",
        }}
        type="text"
        id="members-searchbar"
        placeholder="Search members.."
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default SearchBar;
