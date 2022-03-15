import "./Home.scss";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Latest 6 Weeks" />
        </div>
        <div className="listContainer">
          <div className="title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
