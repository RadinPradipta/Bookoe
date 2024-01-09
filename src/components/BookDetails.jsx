import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import { fetchBooksById } from "../helpers/fetcher";
import TextTruncate from "react-text-truncate";

export default function BookDetails() {
  const { id } = useParams();

  const [item, setItem] = useState({});

  // console.log(numericId);
  // const topPicks = useFetchingContext();
  // console.log(topPicks);
  // const item = topPicks.find((book) => book.id === numericId);
  // console.log(item);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchBooksById({ id });
        console.log(results);
        setItem(results);
        console.log("Search Success");
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {Object.keys(item).length > 0 ? (
        <div className="w-[1241px] h-[587px] mx-auto mt-[116px] grid grid-cols-2 justify-evenly">
          <div className="flex justify-start align-center h-[587px]">
            <img className="rounded-lg object-cover" src={item.image_url} />
          </div>
          <div className="flex flex-col ">
            <div className="text-black text-[62px] font-semibold font-['Poppins']">
              <TextTruncate
                line={5}
                element="span"
                truncateText="…"
                text={item.title}
              />
            </div>
            <div className="text-black text-xl font-normal font-['Poppins'] mb-2">
              by {item.author.name}
            </div>
            <div>
              <StarRating rating={item.rating} />
            </div>
            <div className="text-stone-900 text-base font-normal font-['Poppins'] mb-2">
              {item.synopsis}
            </div>
            <div>
              First Published:{" "}
              {new Date(item.created_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Book Not Found</h1>
        </div>
      )}
    </>
  );
}
