import DriverTable, { IDriverTableDataSource } from "../DriverTable";
import DefaultLayout from "./DefaultLayout";
import {
  getDriverTableDataSource,
  getSideMenuDataSource,
} from "../../functions/DataApi";

function Home() {
  const driverTableDataSource: IDriverTableDataSource[] =
    getDriverTableDataSource();
  const activeMenuID: number | undefined = getSideMenuDataSource().find(
    (x) => x.displayValue === "Home"
  )?.id;
  return (
    <DefaultLayout activeMenuID={activeMenuID}>
      <DriverTable DataSource={driverTableDataSource} />
    </DefaultLayout>
  );
}

export default Home;
