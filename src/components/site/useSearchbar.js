import React from "react";

export const useSearchBar = (data) => {
  console.log({ data });
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleSearchQuery = (e) => {
    const query = e.target.value;

    const members = data || [];

    const filteredData = members.filter((member) => {
      return member.name.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const members = hasSearchResult ? filteredData : data;

  return { members, handleSearchQuery };
};
