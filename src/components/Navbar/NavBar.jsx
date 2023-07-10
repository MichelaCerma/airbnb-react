import { Link, Outlet } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/Contacts">
            <li>Contacts</li>
          </Link>
          <Link to="/Locations">
            <li>Locations</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default NavBar;
