import AppLayout from "./components/appLayout/AppLayout";
import sessionRoutes from "./views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import NotFound from "./views/sessions/NotFound";
import mastersRoutes from "./views/masters/MasterRoutes";
import HomeRoutes from "./views/Home/homeRoutes";
import HomePage from "./views/Home/home";
import RepairRoutes from "./views/Repair/RepairRoutes";
import LegalRoutes from "./views/Legal/LegalRoutes";
import ContactRoutes from "./views/Contact/ContactRoues";
import AuthGuard from "./auth/AuthGuard";
const routes = [
  {
    element: (
      // <AuthGuard>
        <AppLayout />
      // </AuthGuard>
    ),   // ✅ removed AuthGuard wrapper
    children: [
      { path: "/home", element: <HomePage /> },

      ...mastersRoutes,
      ...HomeRoutes,
      ...RepairRoutes,
      ...LegalRoutes,
      ...ContactRoutes,
    ],
  },
        { path: "/", element: <Navigate to="/home" replace /> }, // ✅ redirect root to /home
// ✅ optional: handle unknown routes
  { path: "*", element: <NotFound /> },
];
// const routes = [
//   {
//     element: <AppLayout />,   // ✅ removed AuthGuard wrapper
//     children: [
//       { path: "/", element: <Navigate to="/home" replace /> }, // ✅ redirect root to /home
//       { path: "/home", element: <HomePage /> },

//       ...mastersRoutes,
//       ...HomeRoutes,
//       ...RepairRoutes,
//       ...LegalRoutes,
//       ...ContactRoutes,
//     ],
//   },
//   // ✅ optional: handle unknown routes
//   { path: "*", element: <NotFound /> },
// ];

export default routes;






















// import AuthGuard from "./auth/AuthGuard";
// import AppLayout from "./components/appLayout/AppLayout";
// import sessionRoutes from "./views/sessions/SessionRoutes";
// import { Navigate } from "react-router-dom";
// import NotFound from "./views/sessions/NotFound";
// import mastersRoutes from "./views/masters/MasterRoutes";
// import HomeRoutes from "./views/Home/homeRoutes";
// import HomePage from "./views/Home/home";
// import RepairRoutes from "./views/Repair/RepairRoutes";
// import LegalRoutes from "./views/Legal/LegalRoutes";
// import ContactRoutes from "./views/Contact/ContactRoues";

// const routes = [
//     {
//       element: (
//          <AuthGuard>
//           <AppLayout />
//          </AuthGuard>
//       ),
//       children: [
//           { path: '/home', element: <HomePage/> },

//         //  { path: '/companydetails', element: <div>companydetails</div> },
//         ...mastersRoutes,
//         ...HomeRoutes,
//       ...RepairRoutes,
//       ...LegalRoutes,
//       ...ContactRoutes,
      
//       ],
//     },
//     // ...sessionRoutes,
//   //  { path: '/home', element: <HomePage/> },
//   //   { path: '*', element: <NotFound /> },
//   ];
  
//   export default routes;