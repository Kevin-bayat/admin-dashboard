import "./Featured.scss";
import { KeyboardArrowDown, MoreVertOutlined } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <p className="itemTitle">Target</p>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <p className="itemTitle">Last Week</p>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <p className="itemTitle ">Last Month</p>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon />
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
