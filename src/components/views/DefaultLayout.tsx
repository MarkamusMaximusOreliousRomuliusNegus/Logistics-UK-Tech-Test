import Header from "../Header";
import SideMenu, { ISideMenuDataSource } from "../SideMenu";
import "../../styles/DefaultLayout.css";
import { getSideMenuDataSource } from "../../functions/DataApi";

export interface DefaultLayoutProps {
  children: JSX.Element;
  activeMenuID?: number;
}

function DefaultLayout(props: DefaultLayoutProps) {
  const menuDataSource: ISideMenuDataSource[] = getSideMenuDataSource();

  return (
    <div className="app-root">
      <SideMenu dataSource={menuDataSource} activeMenuID={props.activeMenuID} />
      <div className="app-body">
        <Header />
        <div className="app-body-content">{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
