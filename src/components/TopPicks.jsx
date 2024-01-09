import { useEffect, useState } from "react";
import BigHeader from "./BigHeader";
import { fetchAllBooks } from "../helpers/fetcher";
import SmallBook from "./SmallBook";

export default function TopPicks() {
  const [topPicks, setTopPicks] = useState([]);

  // Sort the data based on the 'created_at' key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchAllBooks();
        setTopPicks(results);
        console.log("Search Success");
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {topPicks.length > 0 ? (
        <>
          <BigHeader>
            <div className="text-stone-900 text-[42px] font-semibold font-['Poppins']">
              <span className="text-violet-500">Top </span>
              <span>Picks </span>
              Collection
            </div>
          </BigHeader>
          <SmallBook book={topPicks.slice(0, 12)} page="top" />
        </>
      ) : (
        <div>
          <h1>Book Not Found</h1>
        </div>
      )}
    </>
  );
}
