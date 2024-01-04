import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BigBookWrapper from "./components/BigBookWrapper";

function App() {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    async function fetchTopPicks() {
      const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
      const url = `${ENDPOINT}`;
      try {
        console.log("fetching");
        const response = await fetch(url);
        const json = await response.json();
        const filteredTopPicks = json.data.filter(
          (book) => book.is_top_pick === true
        );
        const randomTopPicks = chooseRandomBooks(filteredTopPicks, 5);
        setTopPicks(randomTopPicks);

        console.log(randomTopPicks);

        console.log("fetched");
      } catch {
        console.log("fetch errors");
      }
    }
    fetchTopPicks();
  }, []);

  //console.log(chooseRandomBooks(topPicks, 1));

  function chooseRandomBooks(bookArray, numberOfBooksToChoose) {
    // Make a copy of the original array to avoid modifying it
    const arrayCopy = [...bookArray];

    return Array.from({ length: numberOfBooksToChoose }, () => {
      if (arrayCopy.length === 0) {
        return null; // or handle the case when the array is empty
      }

      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      return arrayCopy.splice(randomIndex, 1)[0];
    });
  }

  return (
    <>
      <Navbar />
      {console.log(topPicks)}
      {topPicks.length > 0 && (
        <>
          <Hero book={topPicks.shift()} />
          <BigBookWrapper book={topPicks} />
        </>
      )}
    </>
  );
}

export default App;
