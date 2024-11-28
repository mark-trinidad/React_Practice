const Projects = () => {
    const items = [
        {number: "001", title: "Blog Website"},
        {number: "002", title: "Project 2"},
        {number: "003", title: "Project 3"},
        {number: "004", title: "Project 4"},
        {number: "005", title: "Project 5"}
    ]

  return (
    <div className="project-list">
        {items.map((item, index) => (
            <div className="project-item" key={index}>
                <div className="project-number">{item.number}</div>
                <div className="project-title">{item.title}</div>
                <div className="project-line"></div>
            </div>
        ))}
    </div>
  );
};

export default Projects;
