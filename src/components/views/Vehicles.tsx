import { getSideMenuDataSource } from "../../functions/DataApi";
import DefaultLayout from "./DefaultLayout";

function Vehicles() {
  const activeMenuID: number | undefined = getSideMenuDataSource().find(
    (x) => x.displayValue === "Vehicles"
  )?.id;
  return (
    <DefaultLayout activeMenuID={activeMenuID}>
      <div>
        <h1>Vehicles Page</h1>
        <p>This is a place holder page.</p>
      </div>
    </DefaultLayout>
  );
}

export default Vehicles;
