import projects from './db/projects.json';

const Projects = () => {
 
    return projects.map((item, key) => (

    <div key={key} className="project" style={{backgroundImage: `url(${item.image})`}} >
        <a href={item.url} target="_blank" rel="noreferrer">
           <div className='fill'> <h3 data-outline={item.name}>{item.name}</h3></div>
        </a>
    </div>
    ))
}





export default Projects;