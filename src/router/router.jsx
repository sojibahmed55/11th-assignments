import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../components/CreateAssignment";
import Assignments from "../components/Assignments";
import ViewAssignment from "../components/ViewAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/create-assignment",
        Component: CreateAssignment,
      },
      {
        path: '/assignments/:id',
        Component: ViewAssignment,
      },
      {
        path: '/assignments',
        loader: () => fetch('http://localhost:5000/assignments'),
        Component: Assignments,
      }
    ],
  },
]);
export default router;
