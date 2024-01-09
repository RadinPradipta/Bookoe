import Hero from "./Hero";
import BigBook from "./BigBook";
import SmallBookWrapper from "./SmallBook";
import { useFetchingContext } from "../helpers/fetchingContext";

export default function All() {
  const topPicks = useFetchingContext();
  return (
    <div>
      {topPicks.length > 0 && (
        <>
          {console.log(topPicks)}
          <Hero book={topPicks.slice(0, 3)} />
          <BigBook book={topPicks.slice(3, 7)} />
          <SmallBookWrapper book={topPicks.slice(7)} />
        </>
      )}
    </div>
  );
}
