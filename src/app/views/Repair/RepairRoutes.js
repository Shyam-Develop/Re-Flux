import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

   const Repair = Loadable((lazy(()=>import('./RepairReplace'))));
const Roi =Loadable((lazy(()=>import('./RoiCalcu'))));
   const RepairRoutes=[
    {path:"/repair-replace",element: <Repair /> },
    {path:"/repair-replace/roi-cal",element: <Roi /> },
   ];
   export default RepairRoutes;