import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Layout } from "./components/Layout.tsx";
import { ComingSoon } from "./pages/ComingSoon.tsx";
import { Projects } from "./pages/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "employment",
        element: <ComingSoon />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "contact",
        element: <ComingSoon />
      },
      {
        path: "*",
        element: <NotFound />,
    },
    ],
  },
  
]);

export { router };