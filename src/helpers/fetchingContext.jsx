// FetchingContext.js
import  { createContext, useContext, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { fetchAllBooks, fetchTopPicks } from "./fetcher"; // Assuming your fetchTopPicks function is in a separate file

const FetchingContext = createContext();

 // eslint-disable-next-line react/prop-types
 const FetchingProvider = ({ children }) => {
  const [randomTopPicks, setRandomTopPicks] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const topPicks = await fetchTopPicks();
  //       setRandomTopPicks(topPicks);
  //     } catch (error) {
  //       console.error("Error fetching top picks", error);
  //     }
  //   };

  //   fetchData();
  // }, []); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const topPicks = await fetchAllBooks();
        setRandomTopPicks(topPicks);
      } catch (error) {
        console.error("Error fetching top picks", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <FetchingContext.Provider value={randomTopPicks}>
      {children}
    </FetchingContext.Provider>
  )
};

export const useFetchingContext = () => {
  const context = useContext(FetchingContext);
  if (!context) {
    throw new Error(
      "useFetchingContext must be used within a FetchingProvider"
    );
  }
  return context;
};

export default FetchingProvider