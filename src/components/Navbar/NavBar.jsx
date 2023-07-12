import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Logo from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/Locations">Locations</Link>
          </li>
        </ul>
        <div className={styles.SignUp}>
          <Link to="/Login">Login</Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
