const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

   const Home = Loadable((lazy(()=>import('./home'))));
   const RepairServicesPage = Loadable((lazy(()=>import('./RepairServicesPage'))));


   const HomeRoutes=[
    {path:"/home",element: <Home /> },
    {path:"/home/RepairServicesPage",element: <RepairServicesPage /> },

   ];
   export default HomeRoutes;