import Nav from './Nav.component';

const navLinks = [
  {
      link: "#about",
      text: "about me",
      onClick: "#"
  },
  {
      link: "#projects",
      text: "projects",
      onClick: "#"
  },
  {
      link: "#contact",
      text: "contact",
      onClick: "#"
  }
]


const Header = () => {

return (

<header>
  <h1 data-outline="Joshua Stanford">Joshua Stanford</h1>
  <h2>Full Stack Dev</h2>
  <Nav links={navLinks}/>
</header>

)

}

export default Header;