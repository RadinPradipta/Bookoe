import { useEffect, useState } from "react";
import { fetchSearchResult } from "../helpers/fetcher";
import { useParams } from "react-router-dom";
import SmallBook from "./SmallBook";
import BigHeader from "./BigHeader";
import NotFound from "./NotFound";

export default function SearchResults() {
  const { keyword } = useParams();
  console.log(keyword);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchSearchResult({ keyword });
        setSearchResults(results);
        console.log("Search Success");
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <>
      <BigHeader>
        <div className="text-stone-900 text-[42px] font-semibold font-['Poppins']">
          <span className="text-violet-500">Search For </span>
          {keyword}
        </div>
      </BigHeader>
      {searchResults.length > 0 ? (
        <>
          <SmallBook book={searchResults} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
