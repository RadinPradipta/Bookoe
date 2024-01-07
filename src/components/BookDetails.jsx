import { Navigate, useParams } from "react-router-dom";
import { useFetchingContext } from "../helpers/fetchingContext";
import StarRating from "./StarRating";

export default function BookDetails() {
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  console.log(numericId);
  const topPicks = useFetchingContext();
  console.log(topPicks);
  const item = topPicks.find((book) => book.id === numericId);
  console.log(item);

  return (
    <div className="w-[1241px] h-[587px] mx-auto mt-[116px] grid grid-cols-2 justify-evenly">
      <div className="flex justify-start align-center">
        <img className="rounded-lg object-contain" src={item.image_url} />
      </div>
      <div className="flex flex-col ">
        <div className="text-black text-[62px] font-semibold font-['Poppins']">
          {item.title}
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
  );
}
