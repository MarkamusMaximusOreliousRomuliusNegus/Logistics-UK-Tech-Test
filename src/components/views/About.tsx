import { getSideMenuDataSource } from "../../functions/DataApi";
import DefaultLayout from "./DefaultLayout";

function About() {
  const activeMenuID: number | undefined = getSideMenuDataSource().find(
    (x) => x.displayValue === "About"
  )?.id;
  return (
    <DefaultLayout activeMenuID={activeMenuID}>
      <div>
        <h1>About Page</h1>
        <p>This is a place holder page.</p>
      </div>
    </DefaultLayout>
  );
}

export default About;
