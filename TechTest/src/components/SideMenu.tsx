import siteMenuJson from '../data/menu.json'
import { Link } from "react-router-dom";

function SideMenu() {
    const items = siteMenuJson.data.map(x => <li><Link to={x.url}>{x.title}</Link ></li>)

    return (
        <ul className="vertical-menu">
            {items}
        </ul>
    )
}

export default SideMenu