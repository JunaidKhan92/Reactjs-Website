import { Link } from "react-router-dom"


function dropMenu() {
    let DropMenu = document.querySelector('#Menu')
    let ul = document.querySelector("#myul")
    let text = document.querySelectorAll(".b")
    DropMenu.classList.toggle('hide')
    ul.classList.toggle('moveLeft')
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        element.classList.toggle('spand')

    }
}
const Navbar = () => {

    return <>
        <header>
            <div className="header-left-Section">
                <h3>Online Learn</h3>
                <div className="dropMenuBtn" onClick={dropMenu}>
                    <i class="fa-solid fa-bars fa-xl" style={{ color: "#c0c0c0;" }}></i>
                </div>
            </div>
            <div className="herder-right-section" id="Menu">
                <ul className="my-ul" id="myul">
                    <li><Link  className="b" to="/">
                        Home</Link>
                        </li>
                    <li><a className="b" href="/#about">About Us</a></li>
                    <li><a className="b" href="/#course">Course</a></li>
                    <li>
                        <a className="b" href="#course">
                            <Link to="/Todo">
                            Todo
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    </>
}

export default Navbar