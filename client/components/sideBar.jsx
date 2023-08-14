import "../src/Styles/dashboard.css";
import LogoDash from "../assets/logoDash.png";
import Home from "../assets/Home.png";
import Inventory from "../assets/Inventory.png";
import Report from "../assets/Report.png";
import Suppliers from "../assets/Suppliers.png";
import Order from "../assets/Order.png";
import ManageStore from "../assets/ManageStore.png";
import LogOut from "../assets/LogOut.png";
import Settings from "../assets/Settings.png";

function listItem(item) {
  return (
    <div className="listItemDiv">
      <img src={item.img} className="listItemImg" />
      <span className="listItemText">{item.title}</span>
    </div>
  );
}

const bottomBarItems = (item) => {
  return (
    <div className="bottomItemDiv">
      <img src={item.img} className="listItemImg" />
      <span>{item.title} </span>
    </div>
  );
};

function SideBar() {
  const sideBarData = [
    {
      id: 1,
      img: Home,
      title: "Dashboard",
    },
    {
      id: 2,
      img: Inventory,
      title: "Inventory",
    },
    {
      id: 3,
      img: Report,
      title: "Reports",
    },
    {
      id: 4,
      img: Suppliers,
      title: "Suppliers",
    },
    {
      id: 5,
      img: Order,
      title: "Orders",
    },
    {
      id: 6,
      img: ManageStore,
      title: "ManageStore",
    },
  ];

  const bottomSideBarData = [
    {
      id: 1,
      img: LogOut,
      title: "LogOut",
    },
    {
      id: 2,
      img: Settings,
      title: "Settings",
    },
  ];
  return (
    <div className="leftBar">
      <img src={LogoDash} className="logoDashboard" />
      <div className="topSideBarContainer">
        {sideBarData.map((item) => listItem(item))}
      </div>
      <div className="bottomBarContainer">
        {bottomSideBarData.map((item) => bottomBarItems(item))}
      </div>
    </div>
  );
}

export default SideBar;
