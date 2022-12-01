import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";
import Outlet from "./components/outlet/Outlet";

function App() {
  const currentUser = false;
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login'/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
        <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
