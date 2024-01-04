import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BigBookWrapper from "./components/BigBookWrapper";
import { fetchTopPicks } from "./helpers/fetcher.js";
import SmallBookWrapper from "./components/SmallBookWrapper.jsx";
import FooterTCA from "./components/FooterTCA.jsx";
function App() {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const randomTopPicks = await fetchTopPicks();
      setTopPicks(randomTopPicks);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />      
      {topPicks.length > 0 && (
        <>
          <Hero book={topPicks.shift()} />
          <BigBookWrapper book={topPicks.slice(0, 4)} />
          <SmallBookWrapper book={topPicks.slice(4, 9)} />
        </>
      )}
      <FooterTCA />
    </>
  );
}

export default App;
