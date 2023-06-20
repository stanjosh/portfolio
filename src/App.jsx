import "./App.css";
import Projects from "./components/Projects.component";
import Contact from "./components/Contact.component";
import Nav from "./components/Nav.component";
import About from "./components/About.component";

function App() {
  return (
    <>
      <header>
        <h1 data-outline="Joshua Stanford">Joshua Stanford</h1>
        <h2>Full Stack Dev</h2>
        <Nav />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />

      </main>
      <footer>
        <p>&copy; 2023 stanj</p>
      </footer>
    </>
  );
}

export default App;
