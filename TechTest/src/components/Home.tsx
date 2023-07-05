import DriverTable from "./DriverTable";
import DefaultLayout from "./DefaultLayout";
import { getDriverTableDataSource } from "../functions/DataApi";

function Home() {
  const driverTableDataSource = getDriverTableDataSource();
  return (
    <DefaultLayout>
      <DriverTable DataSource={driverTableDataSource} />
    </DefaultLayout>
  );
}

export default Home;
