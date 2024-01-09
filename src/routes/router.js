import { createBrowserRouter } from "react-router-dom";
import LatestBooks from "../components/LatestBooks";
import TopPicks from "../components/TopPicks";
import App from "../App";
import All from "../components/All";
import BookDetails from "../components/BookDetails";
import SearchResults from "../components/SearchResults";
import Error404 from "../components/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: All },
      { path: "latest", Component: LatestBooks },
      { path: "top-picks", Component: TopPicks },
      {
        path: "books",
        children: [
          {
            path: "",
            Component: All,
          },
          {
            path: ":id",
            Component: BookDetails,
          },
        ],
      },
      {
        path: "search",
        children: [
          {
            path: ":keyword",
            Component: SearchResults,
          },
        ],
      },
    ],
  },
  // Separate route for the 404 page outside the App layout
  {
    path: "*",
    Component: Error404,
  },
]);
export default router;
