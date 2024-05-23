import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import WhatIsChaplean from "@/pages/whatIsChaplean";
import OurDifference from "@/pages/ourDifference";
import Pricing from "@/pages/pricing";
import Docs from "@/pages/docs";
import Contact from "@/pages/contact";
import MainLayout from "@/layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "what-is-chaplean",
        element: <WhatIsChaplean />,
      },
      {
        path: "our-difference",
        element: <OurDifference />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
