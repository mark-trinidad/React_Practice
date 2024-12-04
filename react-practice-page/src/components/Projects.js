import { Link } from "react-router-dom";

const Projects = () => {
  const items = [
    { number: "001", title: "Blog Website", path: "/dojo-blog" },
    { number: "002", title: "Project 2", path: "/project-2" },
    { number: "003", title: "Project 3", path: "/project-3" },
    { number: "004", title: "Project 4", path: "/project-4" },
    { number: "005", title: "Project 5", path: "/project-5" },
  ];

  return (
    <div className="project-list">
      {items.map((item, index) => (
        <Link to={item.path} className="project-item" key={index}>
          <div className="project-number">{item.number}</div>
          <div className="project-title">{item.title}</div>
          <div className="project-line"></div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
