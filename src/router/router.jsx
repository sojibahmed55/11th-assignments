import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateAssignment from "../components/CreateAssignment";
import Assignments from "../components/Assignments";
import ViewAssignment from "../components/ViewAssignment";
import UpdateAssignment from "../components/UpdateAssignment";
import MyAttempts from "../components/MyAttempts";
import Pending from "../pages/Private/Pending";
import RequireAuth from "../context/RequireAuth";

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
        path: "/my-attempts",
        element: <RequireAuth><MyAttempts></MyAttempts></RequireAuth> ,
      },
      {
        path: "/pending-assignment",
        element: <RequireAuth ><Pending /></RequireAuth>,
      },
      {
        path: "/create-assignment",
        element: <RequireAuth ><CreateAssignment /></RequireAuth>,
      },
      {
        path: '/update-assignment/:id',
        loader: ({ params }) => fetch(`https://11th-assignment-server-three.vercel.app/assignments/${params.id}`),
        Component: UpdateAssignment,
      },
      {
        path: '/assignments/:id',
        loader: ({ params }) => fetch(`https://11th-assignment-server-three.vercel.app/assignments/${params.id}`),
        element: <RequireAuth ><ViewAssignment /></RequireAuth>,
      }, {
        path: '/assignments',
        loader: () => fetch('https://11th-assignment-server-three.vercel.app/assignments'),
        Component: Assignments,
      }
    ],
  },
]);
export default router;