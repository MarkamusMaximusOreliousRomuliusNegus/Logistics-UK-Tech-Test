import { getSideMenuDataSource } from "../../functions/DataApi";
import DefaultLayout from "./DefaultLayout";

function Drivers() {
  const activeMenuID: number | undefined = getSideMenuDataSource().find(
    (x) => x.displayValue === "Drivers"
  )?.id;
  return (
    <DefaultLayout activeMenuID={activeMenuID}>
      <div>
        <h1>Drivers Page</h1>
        <p>This is a place holder page.</p>
      </div>
    </DefaultLayout>
  );
}

export default Drivers;
