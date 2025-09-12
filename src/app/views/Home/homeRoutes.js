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

const HomeRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/home/RepairServices", element: <RepairServices /> },
  { path: "/home/Rentals", element: <Rentals /> },
  { path: "/home/RepairServicesPage", element: <RepairServicesPage /> },
  { path: "/home/ViewCaseStudy", element: <ViewcaseStudyPage /> },
  { path: "home/CheckAvailabilty", element: <CheckAvailabilty /> },
  { path: "home/SellMagnet", element: <SellMagnet /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "/home/RefurbishedElectromagnet",element: <RefurbishedElectromagnet /> },
  { path: "/home/RefurbishedDetail",element: <RefurbishedDetail />,},


];
export default HomeRoutes;



// const { default: Loadable } = require("app/components/Loadable");
// const { lazy } = require("react");

// const Home = Loadable(lazy(() => import("./home")));
// const RepairServicesPage = Loadable(lazy(() => import("./RepairServicesPage")));
// const ViewcaseStudyPage = Loadable(lazy(() => import("./ViewCaseStudy")));
// const CheckAvailabilty = Loadable(lazy(() => import("./CheckAvailabilty")));
// const RepairServices = Loadable(lazy(() => import("./RepairServices")));
// const Rentals = Loadable(lazy(() => import("./Rentals")));
// const SellMagnet = Loadable(lazy(() => import("./SellMagnet")));
// const AboutUs = Loadable(lazy(() => import("./AboutUs")));
// const RefurbishedElectromagnet = Loadable(lazy(() => import("./RefurbishedElectromagnet")));
// const RefurbishedDetail = Loadable(lazy(() => import("./RefurbishedDetail")));

// const HomeRoutes = [
//   { path: "/home", element: <Home /> },
//   { path: "/home/RepairServices", element: <RepairServices /> },
//   { path: "/home/Rentals", element: <Rentals /> },
//   { path: "/home/RepairServicesPage", element: <RepairServicesPage /> },
//   { path: "/home/ViewCaseStudy", element: <ViewcaseStudyPage /> },
//   { path: "home/CheckAvailabilty", element: <CheckAvailabilty /> },
//   { path: "home/SellMagnet", element: <SellMagnet /> },
//   { path: "about-us", element: <SellMagnet /> },
//   { path: "/home/RefurbishedElectromagnet",element: <RefurbishedElectromagnet /> },
//   { path: "/home/RefurbishedDetail",element: <RefurbishedDetail />,},


// ];
// export default HomeRoutes;










   
// const { default: Loadable } = require("app/components/Loadable");
// const { lazy } = require("react");

//    const Home = Loadable((lazy(()=>import('./home'))));
//    const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));
//    const ViewcaseStudyPage = Loadable((lazy(()=>import('./ViewCaseStudy'))));
//   const CheckAvailabilty = Loadable((lazy(() => import('./CheckAvailabilty'))));  
//    const RepairServices =Loadable((lazy(()=>import('./RepairServices'))));
//   const Rentals =Loadable((lazy(()=>import('./Rentals'))));
//   const SellMagnet = Loadable(lazy(() => import("./SellMagnet")));
// const AboutUs=Loadable(lazy(() => import("./AboutUs")));
//    const HomeRoutes=[
//     {path:"/home",element: <Home /> },
//     {path:"/home/RepairServices",element: <RepairServices /> },
//     {path:"/home/Rentals",element: <Rentals /> },
//     {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },
//     {path:"/home/ViewCaseStudy",element: <ViewcaseStudyPage /> },
//     {path:"home/CheckAvailabilty",element: <CheckAvailabilty/>},
//       { path: "home/SellMagnet", element: <SellMagnet /> },
//             { path: "about-us", element: <SellMagnet /> },

//    ];
//    export default HomeRoutes;






   
// const { default: Loadable } = require("app/components/Loadable");
// const { lazy } = require("react");

//    const Home = Loadable((lazy(()=>import('./home'))));
//    const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));
//    const ViewcaseStudyPage = Loadable((lazy(()=>import('./ViewCaseStudy'))));
//   const CheckAvailabilty = Loadable((lazy(() => import('./CheckAvailabilty'))));  
//    const RepairServices =Loadable((lazy(()=>import('./RepairServices'))));
//   const Rentals =Loadable((lazy(()=>import('./Rentals'))));
//   const SellMagnet = Loadable(lazy(() => import("./SellMagnet")));
// const AboutUs=Loadable(lazy(() => import("./AboutUs")));
//    const HomeRoutes=[
//     {path:"/home",element: <Home /> },
//     {path:"/home/RepairServices",element: <RepairServices /> },
//     {path:"/home/Rentals",element: <Rentals /> },
//     {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },
//     {path:"/home/ViewCaseStudy",element: <ViewcaseStudyPage /> },
//     {path:"home/CheckAvailabilty",element: <CheckAvailabilty/>},
//       { path: "home/SellMagnet", element: <SellMagnet /> },
//             { path: "about-us", element: <SellMagnet /> },

//    ];
//    export default HomeRoutes;