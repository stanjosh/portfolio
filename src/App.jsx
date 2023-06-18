import './App.css'
import Projects from './components/Projects.component'


function App() {
  return (
    <>
    <header>

      <div className="bar">      
      <div className="title">
        <h1 data-outline="Joshua Stanford">Joshua&nbspStanford</h1>
        <h2>Full Stack Dev</h2>
      </div>

      </div>
      <nav>
        <a href="#about"><button name="about me"><div></div><span data-outline="about me">about me</span></button></a>
        <a href="#projects"><button name="projects"><div></div><span data-outline="projects">projects</span></button></a>
        <a href="#contact"><button name="contact"><div></div><span data-outline="contact">contact</span></button></a>
        <a href="#resume"><button name="resume"><div></div><span data-outline="resume">resume</span></button></a>   
      </nav>
    </header>
    <main>    

        <section id="about">
          <h2>about me</h2>
          <div className="about section">
            <p>HTML CSS JavaScript React NGINX etc</p>
            <p>Driven by solving problems, to the point of automating myself right out of the job sometimes.</p>
          </div>
        </section>

        <section id="projects">
            <h2>projects</h2>
            <div className="projects section">
              <div className="projectgrid">
                <Projects />
                
              </div>
            </div>
        </section>
        <section id="contact">
          <h2>contact</h2>    
          <div className="contact about section">
              <p><a href="mailto:stanjosh@gmail.com" rel="noreferrer" target="_blank"><img src="public/assets/images/email.svg" />stanjosh@gmail.com</a></p>
              <p><a href="https://github.com/stanjosh" rel="noreferrer" target="_blank"><img src="public/assets/images/github.svg" />my github</a></p>
          </div>
        </section>
      </main>
    <footer>
        <p>&copy; 2023 joshua stanford</p>
    </footer>
    </>
  )
}

export default App
