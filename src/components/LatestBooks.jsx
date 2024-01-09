import { useEffect, useState } from "react";
import BigHeader from "./BigHeader";
import { fetchAllBooks } from "../helpers/fetcher";
import SmallBook from "./SmallBook";

export default function LatestBooks() {
  const [latest, setLatest] = useState([]);

  const compareDates = (dateStringA, dateStringB) => {
    const dateA = new Date(dateStringA);
    const dateB = new Date(dateStringB);
    return dateA - dateB;
  };

  // Sort the data based on the 'created_at' key

   useEffect(() => {
     const fetchData = async () => {
       try {
         const results = await fetchAllBooks();
         setLatest(results);
         console.log("Search Success");
       } catch (error) {
         console.error("Error fetching search results", error);
       }
     };

     fetchData();
   }, []);
 return (
   <>
     {latest.length > 0 ? (
       <>
         <BigHeader>
           <div className="text-stone-900 text-[42px] font-semibold font-['Poppins']">
             <span>Our </span>
             <span className="text-violet-500">Latest </span>
             Collection
           </div>
         </BigHeader>
         <SmallBook book={latest.slice(0,12).sort((b, a) => compareDates(a.created_at, b.created_at))} page="latest"/>
        
       </>
     ) : (
       <div>
         <h1>Book Not Found</h1>
       </div>
     )}
   </>
 );
}

