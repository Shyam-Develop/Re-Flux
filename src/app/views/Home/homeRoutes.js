const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

   const Home = Loadable((lazy(()=>import('./home'))));
   const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));
   const ViewcaseStudyPage = Loadable((lazy(()=>import('./ViewCaseStudy'))));
const AboutUs = Loadable((lazy(()=>import('./AboutUs'))));

   const HomeRoutes=[
    {path:"/home",element: <Home /> },
    {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },
    {path:"/home/ViewCaseStudy",element: <ViewcaseStudyPage /> },
{path:"/about-us",element: <AboutUs /> },
   ];
   export default HomeRoutes;