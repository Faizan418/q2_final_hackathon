"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1>Search Results for &#34{query}&#34</h1>
      {/* Add logic to fetch and display results */}
    </div>
  );
};

export default SearchPage;
