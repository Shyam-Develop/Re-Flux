const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

const Home = Loadable(lazy(() => import("./home")));
const RepairServicesPage = Loadable(lazy(() => import("./RepairServicesPage")));
const ViewcaseStudyPage = Loadable(lazy(() => import("./ViewCaseStudy")));
const CheckAvailabilty = Loadable(lazy(() => import("./CheckAvailabilty")));
const RepairServices = Loadable(lazy(() => import("./RepairServices")));
const Rentals = Loadable(lazy(() => import("./Rentals")));
const SellMagnet = Loadable(lazy(() => import("./SellMagnet")));
const AboutUs = Loadable(lazy(() => import("./AboutUs")));
const RefurbishedElectromagnet = Loadable(lazy(() => import("./RefurbishedElectromagnet")));
const RefurbishedDetail = Loadable(lazy(() => import("./RefurbishedDetail")));
const CircularMagnet = Loadable(lazy(() => import("./CircularMagnet")));
const BlogPost = Loadable(lazy(() => import("./Blogpost")));
const BlogDetails = Loadable(lazy(() => import("./BlogDetails")));

const HomeRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/home/RepairServices", element: <RepairServices /> },
  { path: "/home/Rentals", element: <Rentals /> },
  { path: "/home/RepairServicesPage", element: <RepairServicesPage /> },
  { path: "/home/CircularMagnet", element: <CircularMagnet /> },
  { path: "/home/BlogPost", element: <BlogPost /> },
  { path: "/home/BlogDetails", element: <BlogDetails /> },
  { path: "/home/ViewCaseStudy", element: <ViewcaseStudyPage /> },
  { path: "home/CheckAvailabilty", element: <CheckAvailabilty /> },
  { path: "home/SellMagnet", element: <SellMagnet /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "/home/RefurbishedElectromagnet",element: <RefurbishedElectromagnet /> },
  { path: "/home/RefurbishedDetail",element: <RefurbishedDetail />,},
  { path: "/home/CircularMagnet",element: <CircularMagnet />,},

];
export default HomeRoutes;






