import { useState } from "react";
import ActivityKpi from "./ActivityKpi";
import BooleanSquare from "./BooleanSquare";
import TextField from "@mui/material/TextField";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles/driverTable.css";

// defines a data source item for the table
export interface IDriverTableDataSource {
  driverID: number;
  driverName: string;
  vehicleRegistration: string;
  sumAllTimeMinutes: number;
  sumDriveTimeMinutes: number;
  sumRestTimeMinutes: number;
  sumWorkTimeMinutes: number;
  sumAvailableTimeMinutes: number;
  isActiveMonday: boolean;
  isActiveTuesday: boolean;
  isActiveWednesday: boolean;
  isActiveThursday: boolean;
  isActiveFriday: boolean;
  isActiveSaturday: boolean;
  isActiveSunday: boolean;
}

// defines properties for this component
export interface DriverTableProps {
  DataSource: IDriverTableDataSource[];
}

function DriverTable(props: DriverTableProps) {
  const [driverFilter, setdriverFilter] = useState("");

  // search filter change handler
  const onDriverFilterChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const value = e?.target?.value;
    setdriverFilter(value);
  };

  // for filtering the datasource
  const getFilteredDataSource = (): IDriverTableDataSource[] => {
    let dataSource = props.DataSource;

    // filter by search input
    if (driverFilter !== null && driverFilter.length != 0) {
      dataSource = dataSource.filter((a) =>
        a.driverName.toLowerCase().includes(driverFilter.toLocaleLowerCase())
      );
    }

    return dataSource;
  };

  // create table rows
  const dataRows = getFilteredDataSource().map((x) => (
    <TableRow key={x.driverID}>
      <TableCell align="right">{x.driverName}</TableCell>
      <TableCell align="right">{x.vehicleRegistration}</TableCell>
      <TableCell align="right">
        <ActivityKpi
          sumAllTimeMinutes={x.sumAllTimeMinutes}
          sumAvailableTimeMinutes={x.sumAvailableTimeMinutes}
          sumDriveTimeMinutes={x.sumDriveTimeMinutes}
          sumRestTimeMinutes={x.sumRestTimeMinutes}
          sumWorkTimeMinutes={x.sumWorkTimeMinutes}
        />
      </TableCell>
      <TableCell align="right">
        <div className="hrz-list">
          <BooleanSquare isEnabled={x.isActiveMonday} title="Mon" />
          <BooleanSquare isEnabled={x.isActiveTuesday} title="Tue" />
          <BooleanSquare isEnabled={x.isActiveWednesday} title="Wed" />
          <BooleanSquare isEnabled={x.isActiveThursday} title="Thur" />
          <BooleanSquare isEnabled={x.isActiveFriday} title="Fri" />
          <BooleanSquare isEnabled={x.isActiveSaturday} title="Sat" />
          <BooleanSquare isEnabled={x.isActiveSunday} title="Sun" />
        </div>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className="table-root">
      <div className="table-toolbar">
        <TextField
          label="Search"
          variant="outlined"
          placeholder="Search for driver."
          value={driverFilter}
          onChange={onDriverFilterChange}
          autoFocus
        />
      </div>
      <div className="table-content">
        <TableContainer component={Paper}>
          <Table aria-label="driver table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span>Driver name</span>
                </TableCell>
                <TableCell align="right">
                  <span>Vehicle Reg</span>
                </TableCell>
                <TableCell align="right">
                  <span>Total Activity</span>
                </TableCell>
                <TableCell align="right">
                  <span></span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{dataRows}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DriverTable;
