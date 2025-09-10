const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

   const Home = Loadable((lazy(()=>import('./home'))));
   const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));
   const ViewcaseStudyPage = Loadable((lazy(()=>import('./ViewCaseStudy'))));


   const HomeRoutes=[
    {path:"/home",element: <Home /> },
    {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },
    {path:"/home/ViewCaseStudy",element: <ViewcaseStudyPage /> },

   ];
   export default HomeRoutes;