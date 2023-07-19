import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Resister from "./components/auth/Resister";
import RootLayout from "./components/pages/RootLayout";
import ErrorPage from "./components/pages/Error";
import Bootcamps from "./components/bootcamp/Bootcamps";
import Dashboard from "./components/dashboard/Dashboard";
import AddProfile from "./components/dashboard/profile/AddProfile";
import AddEducation from "./components/dashboard/education/AddEducation";
import AddExperience from "./components/dashboard/experience/AddExperience";
import FindDevelopers from "./components/developers/FindDevelopers";
import { resistrationAction } from "./components/auth/authenticationActions";
import { loginAction } from "./components/auth/loginAction";
import {
  getToken,
  logoutAction,
  checkAuthLoader,
  // getProfileStatus,
} from "./util/auth";
import { EducationAction } from "./components/dashboard/education/EducationActions";
import { ExperienceActions } from "./components/dashboard/experience/ExperienceAction";
import DeveloperDetails from "./components/developers/DeveloperDetails";
import {
  ProfileActions,
  ProfileDetailsLoader,
} from "./components/dashboard/profile/ProfileActions";
import { CurrentUserDetailsLoader } from "./components/dashboard/CurrentUserDetails";
import { DeveloperDetailsLoader } from "./components/developers/DeveloperDetailsLoader";
import { DeleteProfileAction } from "./components/dashboard/DeleteActions";
import AddBootcamp from "./components/bootcamp/AddBootcamp";
import { BootcampAction } from "./components/bootcamp/BootcampAction";
import Posts from "./components/post/Posts";
import { PostAction, PostLoader } from "./components/post/PostActions";
// import AddPost from "./components/post/AddPost";
import Comments from "./components/post/Comments";
import PostLayout from "./components/post/PostLayout";
import { CommentAction } from "./components/post/CommentAction";
import DashboardLayout from "./components/dashboard/DashboardLayout";

// const isActive = getProfileStatus();
const token = getToken();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: getToken,
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login />, action: loginAction },
      { path: "resister", element: <Resister />, action: resistrationAction },
      { path: "logout", action: logoutAction },
      { path: "bootcamps", element: <Bootcamps /> },
      {
        path: "bootcamps/form",
        element: <AddBootcamp />,
        action: BootcampAction,
        loader: checkAuthLoader,
      },
      token
        ? {
            path: "developers",
            element: <FindDevelopers />,
            loader: ProfileDetailsLoader,
          }
        : redirect("/login"),
      token
        ? {
            path: "developers/:handle",
            element: <DeveloperDetails />,
            loader: DeveloperDetailsLoader,
            id: "details",
          }
        : redirect("/login"),
      token
        ? {
            path: "dashboard",
            element: <DashboardLayout />,
            id: "deshboard",
            action: DeleteProfileAction,
            loader: CurrentUserDetailsLoader,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                path: "createProfile",
                element: <AddProfile />,
                loader: checkAuthLoader,
                action: ProfileActions,
              },
              {
                path: "addEducation",
                element: <AddEducation />,
                action: EducationAction,
                loader: checkAuthLoader,
              },
              {
                path: "addExperience",
                element: <AddExperience />,
                loader: checkAuthLoader,
                action: ExperienceActions,
              },
            ],
          }
        : redirect("/login"),
      token
        ? {
            path: "posts",
            element: <PostLayout />,
            id: "post",
            loader: PostLoader,
            action: PostAction,
            children: [
              {
                path: "",
                element: <Posts />,
              },
              {
                path: ":_id",
                element: <Comments />,
                action: CommentAction,
              },
            ],
          }
        : redirect("/login"),
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
