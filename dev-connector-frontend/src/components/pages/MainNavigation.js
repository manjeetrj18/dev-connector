import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bootcamps"
            className={({ isActive }) =>
              isActive ? styles.active : styles.unactive
            }
          >
            Bootcamps
          </NavLink>
        </li>
        {!token && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : styles.unactive
              }
            >
              Login
            </NavLink>
          </li>
        )}
        {!token && (
          <li>
            <NavLink
              to="/resister"
              className={({ isActive }) =>
                isActive ? styles.active : styles.unactive
              }
            >
              Resister
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <NavLink
              to="/developers"
              className={({ isActive }) =>
                isActive ? styles.active : styles.unactive
              }
            >
              Developers
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? styles.active : styles.unactive
              }
            >
              Dashboard
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? styles.active : styles.unactive
              }
            >
              Posts
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <Form action="/logout" method="post">
              <button style={{ backgroundColor: "skyblue" }}>Logout </button>
            </Form>
          </li>
        )}
      </ul>
    </header>
  );
}

export default MainNavigation;
