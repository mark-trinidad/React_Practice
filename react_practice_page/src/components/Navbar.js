import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.css";

const Navbar = ({ isProjectClicked }) => {
  const location = useLocation();  // Get the current route

  // Check if the current path is the home page ("/")
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`${styles.navbar} ${isProjectClicked ? styles.shrink : ""}`}>
      <Link to="/" className={styles["navbar-link"]}>
        <h1 className={isHomePage ? "" : styles.shrink}> {/* Adjust size based on location */}
          REACT PRACTICE
        </h1>
      </Link>
    </nav>
  );
};

export default Navbar;
