const { default: Loadable } = require("app/components/Loadable");
const { lazy } = require("react");

   


   const Home=Loadable((lazy(()=>import('./home'))));


   const HomeRoutes=[
    {path:"/home",element: <Home /> },
   ];
   export default HomeRoutes;