import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import AddBatch from "../views/ui/TTPages/AddBatch/AddBatch.js";
// import PreviousTimeTable from "../views/ui/TTPages/PreviousTimeTable/PreviousTimeTable.js";
// import Admin from "../views/ui/TTPages/Admin/Admin.js";
// import Teachers from "../views/ui/TTPages/Teachers/Teachers.js";
// import Students from "../views/ui/TTPages/Students/Students.js";
// import DragnDrop from "../views/ui/DragnDrop/index.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const TimeTable= lazy(()=> import("../views/ui/TTPages/TimeTable/TimeTable.js"));
const Students= lazy(()=> import("../views/ui/TTPages/Students/Students.js"));
const Teachers= lazy(()=> import("../views/ui/TTPages/Teachers/Teachers.js"));
const Admin= lazy(()=> import("../views/ui/TTPages/Admin/Admin.js"));
const PreviousTimeTable= lazy(()=> import("../views/ui/TTPages/PreviousTimeTable/PreviousTimeTable.js"));
const AddBatch= lazy(()=> import("../views/ui/TTPages/AddBatch/AddBatch.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      
    
      { path: "/dragndrop", exact: true, element: <TimeTable /> },

      { path: "/students", exact: true, element: <Students />},
      { path: "/teachers", exact: true, element: <Teachers />},
      { path: "/admin", exact: true, element: <Admin />},
      { path: "/previoustimetable", exact: true, element: <PreviousTimeTable />},
      { path: "/addbatch", exact: true, element: <AddBatch />}

    ],
  },
];

export default ThemeRoutes;
