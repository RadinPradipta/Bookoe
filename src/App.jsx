import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BigBookWrapper from "./components/BigBookWrapper";
import { fetchTopPicks } from "./helpers/fetcher.js";
import SmallBookWrapper from "./components/SmallBookWrapper.jsx";
import FooterTCA from "./components/FooterTCA.jsx";
import Footer from "./components/Footer.jsx";
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
        {console.log(topPicks)}
          <Hero book={topPicks.slice(0, 3)} />
          <BigBookWrapper book={topPicks.slice(3, 7)} />
          <SmallBookWrapper book={topPicks.slice(7, 12)} />
        </>
      )}
      <FooterTCA />
      <Footer />
    </>
  );
}

export default App;
