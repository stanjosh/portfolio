/* eslint-disable react/prop-types */




const Nav = ({links}) => {
    return (
        <nav>

           {links.map((item) => {
                return (
                <a key={item.text} href={item.link}>
                    <button name={"btn-" + item.text}>
                        <div></div>
                        <span data-outline={item.text} >{item.text}</span>
                    </button>
                </a>
                )
           })}
        </nav>
    )
}


export default Nav;