import { useEffect, useState } from "react"
import { fetchSearchResult } from "../helpers/fetcher";
import { useParams } from "react-router-dom";
import BigBook from "./BigBook";


export default function SearchResults() {
    const { keyword } = useParams();
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const results = await fetchSearchResult(keyword);
            setSearchResults(results);
          } catch (error) {
            console.error("Error fetching search results", error);
          }
        };
    
        fetchData();
      }, []);


  return (
    <>
{searchResults.length > 0 ? (
 <BigBook book={searchResults} />
):
(
    <div>
        <h1>Book Not Found</h1>
    </div>
)
}
    </>
  )
}
