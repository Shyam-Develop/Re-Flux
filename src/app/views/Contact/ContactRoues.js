import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

   const Contact = Loadable((lazy(()=>import('./Contact'))));
   const ContactRoutes=[
    {path:"/contact-us",element: <Contact /> },
   ];
   export default ContactRoutes;