import { IDriverTableDataSource } from "../components/DriverTable";
import { ISideMenuDataSource } from "../components/SideMenu";
import DriverJson from "../data/drivers.json";
import SiteMenuJson from "../data/menu.json";

/**
 * Returns the driver table data source.
 * this function assumes the data will not span multiple weeks
 *
 * to do: refine this its looping many times.
 */
export function getDriverTableDataSource(): IDriverTableDataSource[] {
  const data: IDriverTableDataSource[] = [];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // loop through each driver and add it to the driver dictionary
  for (let idata = 0; idata < DriverJson.data.length; idata++) {
    const dataItem = DriverJson.data[idata];

    // convert the dates to the days of the week
    const dates = new Set(
      dataItem.traces.flatMap((a) => weekday[new Date(a.date).getDay()])
    );

    // sum activity types
    const activity = dataItem.traces.flatMap((a) => a.activity);
    const activityKpi: { [type: string]: number } = {};
    let totalTime = 0;
    activity.forEach((a) => {
      activityKpi[a.type] = (activityKpi[a.type] || 0) + a.duration;
      totalTime = a.duration;
    });

    // push as a flat data item
    data.push({
      driverID: dataItem.driverID,
      driverName: `${dataItem.forename} ${dataItem.surname}`,
      vehicleRegistration: dataItem.vehicleRegistration,
      sumAllTimeMinutes: totalTime,
      sumDriveTimeMinutes: activityKpi["drive"] || 0,
      sumRestTimeMinutes: activityKpi["rest"] || 0,
      sumWorkTimeMinutes: activityKpi["work"] || 0,
      sumAvailableTimeMinutes: activityKpi["available"] || 0,
      isActiveMonday: dates.has("Monday"),
      isActiveTuesday: dates.has("Tuesday"),
      isActiveWednesday: dates.has("Wednesday"),
      isActiveThursday: dates.has("Thursday"),
      isActiveFriday: dates.has("Friday"),
      isActiveSaturday: dates.has("Saturday"),
      isActiveSunday: dates.has("Sunday"),
    });
  }

  return data;
}

/** Returns the site menu data source. */
export function getSideMenuDataSource(): ISideMenuDataSource[] {
  return SiteMenuJson.data.map((x, i) => ({
    id: i,
    displayValue: x.title,
    url: x.url,
  }));
}
