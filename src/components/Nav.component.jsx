const Nav = () =>{
    return (
        <nav>
        <a href="#about">
        <button name="about me">
            <div></div>
            <span data-outline="about me">about me</span>
        </button>
        </a>
        <a href="#projects">
        <button name="projects">
            <div></div>
            <span data-outline="projects">projects</span>
        </button>
        </a>
        <a href="#contact">
        <button name="contact">
            <div></div>
            <span data-outline="contact">contact</span>
        </button>
        </a>
        </nav>
    )
}


export default Nav;