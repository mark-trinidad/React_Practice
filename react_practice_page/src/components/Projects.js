import { Link } from "react-router-dom";
import styles from "../index.module.css";

const Projects = ({ onProjectClick }) => {
  const items = [
    { number: "001", title: "Blog Website", path: "/dojo-blog/" },
    { number: "002", title: "BRBC Files", path: "https://mark-trinidad.github.io/BRBC_Files" },
    { number: "003", title: "Project 3", path: "/project-3" },
    { number: "004", title: "Project 4", path: "/project-4" },
    { number: "005", title: "Project 5", path: "/project-5" },
  ];

  return (
    <div className={styles["project-list"]}>
      {items.map((item, index) => {
        const isExternalLink = item.path.startsWith("http");

        return isExternalLink ? (
          <a
            href={item.path}
            className={styles["project-item"]}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles["project-number"]}>{item.number}</div>
            <div className={styles["project-title"]}>{item.title}</div>
            <div className={styles["project-line"]}></div>
          </a>
        ) : (
          <Link
            to={item.path}
            className={styles["project-item"]}
            key={index}
            onClick={onProjectClick}
          >
            <div className={styles["project-number"]}>{item.number}</div>
            <div className={styles["project-title"]}>{item.title}</div>
            <div className={styles["project-line"]}></div>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
