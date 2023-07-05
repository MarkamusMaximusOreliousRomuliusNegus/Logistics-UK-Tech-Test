import "../styles/activityKpi.css";
export interface IActivityKpiProps {
  sumAllTimeMinutes: number;
  sumDriveTimeMinutes: number;
  sumRestTimeMinutes: number;
  sumWorkTimeMinutes: number;
  sumAvailableTimeMinutes: number;
}

function ActivityKpi(props: IActivityKpiProps) {
  return (
    <ul className="activity-kpi">
      <li className="activity-lead">
        <label>Total Time (m):</label>
        <span>{props.sumAllTimeMinutes}</span>
      </li>
      <li>
        <label>Drive (m):</label>
        <span>{props.sumDriveTimeMinutes}</span>
      </li>
      <li>
        <label>Rest (m):</label>
        <span>{props.sumRestTimeMinutes}</span>
      </li>
      <li>
        <label>Available (m):</label>
        <span>{props.sumWorkTimeMinutes}</span>
      </li>
    </ul>
  );
}

export default ActivityKpi;
