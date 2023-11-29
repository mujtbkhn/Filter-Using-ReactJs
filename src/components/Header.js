import { IMG_URL } from "../../constants"

const Header = () => {
    return (
        <div className="header" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img style={{ width: "100px" }} src={IMG_URL} />
            <input style={{ height: "20px", marginTop: "40px" }} placeholder="Search" type="text"></input>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>React</li>
                <li>Mujju</li>
            </ul>
        </div>
    )
}
const Header1 = () => {
    return (
        <div className="header" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img style={{ width: "100px" }} src={IMG_URL} />
            <input style={{ height: "20px", marginTop: "40px" }} placeholder="Search" type="text"></input>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>React</li>
                <li>Mujju</li>
            </ul>
        </div>
    )
}


export default Header