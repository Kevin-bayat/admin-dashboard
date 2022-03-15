import "./New.scss";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../img/no-image-icon-23494.png";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
const New = ({ tittle, inputs }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{tittle}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : image}
              alt={""}
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type="text" placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
