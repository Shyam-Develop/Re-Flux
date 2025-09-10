const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

   const Home = Loadable((lazy(()=>import('./home'))));
   const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));
   const ViewcaseStudyPage = Loadable((lazy(()=>import('./ViewCaseStudy'))));
const CheckAvailabilty = Loadable((lazy(() => import('./CheckAvailabilty'))));  
 const RepairServices =Loadable((lazy(()=>import('./RepairServices'))));

   const HomeRoutes=[
    {path:"/home",element: <Home /> },
    {path:"/home/RepairServices",element: <RepairServices /> },
    {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },
    {path:"/home/ViewCaseStudy",element: <ViewcaseStudyPage /> },
    {path:"home/CheckAvailabilty",element: <CheckAvailabilty/>}

   ];
   export default HomeRoutes;