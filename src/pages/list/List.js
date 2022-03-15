import "./List.scss";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/DataTable/DataTable";

const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};
export default List;
