import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

   const Legal = Loadable((lazy(()=>import('./Legal'))));
      const Customer = Loadable((lazy(()=>import('./CustomerSays'))))
   const LegalRoutes=[
    {path:"/legal",element: <Legal /> },
    {path:"/customer-says",element: <Customer /> },
   ];
   export default LegalRoutes;