import { createBrowserRouter } from "react-router-dom";
// import AllBooks from "./pages/AllBooks";
import LatestBooks from "../components/LatestBooks";
import TopPicks from "../components/TopPicks";
import App from "../App";
import All from "../components/All";
import BookDetails from "../components/BookDetails";

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
    ],
  },
]);
export default router;
