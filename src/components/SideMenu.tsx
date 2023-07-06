import { Link } from "react-router-dom";

// props for the side menu
export interface ISideMenuProps {
  dataSource: ISideMenuDataSource[];
  activeMenuID?: number;
}

// data source for the side menu
export interface ISideMenuDataSource {
  id: number;
  displayValue: string;
  url: string;
}

function SideMenu(props: ISideMenuProps) {
  const items = props.dataSource.map((x) => (
    <li
      key={x.id}
      className={`sitemenu-link ${props.activeMenuID === x.id ? "active" : ""}`}
    >
      <Link key={x.id} to={x.url} style={{ textDecoration: "none" }}>
        {x.displayValue}
      </Link>
    </li>
  ));

  return <ul className="vertical-menu">{items}</ul>;
}

export default SideMenu;
