import AuthGuard from "./auth/AuthGuard";
import AppLayout from "./components/appLayout/AppLayout";
import sessionRoutes from "./views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import NotFound from "./views/sessions/NotFound";
import mastersRoutes from "./views/masters/MasterRoutes";
import HomeRoutes from "./views/Home/homeRoutes";
import HomePage from "./views/Home/home";


const routes = [
    {
      element: (
        <AuthGuard>
          <AppLayout />
        </AuthGuard>
      ),
      children: [
          { path: '/home', element: <HomePage/> },
        //  { path: '/companydetails', element: <div>companydetails</div> },
        ...mastersRoutes,
      // ...HomeRoutes,
      
      
      ],
    },
    ...sessionRoutes,
    { path: '/', element: <Navigate to="/session/signin" /> },
    { path: '*', element: <NotFound /> },
  ];
  
  export default routes;