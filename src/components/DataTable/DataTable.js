import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource.js";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/55">
              <div className="viewButton">View</div>
            </Link>

            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="newUser">
        Add New User
        <Link to="/users/new">
          <div className="new">Add New</div>
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default DataTable;
