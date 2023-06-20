import projects from "./db/projects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2>projects</h2>
      <div className="projects section">
        <div className="projectgrid">
          {projects.sort(() => .5 - Math.random()).map((item, key) => (
            <div
              key={key}
              className="project"
              
            >
            <a href={item.url} target="_blank" rel="noreferrer">
                <div className="fill" style={{ backgroundImage: `url(${item.image})` }}>
                    
                </div>
                <h3 data-outline={item.name}>{item.name}</h3>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
