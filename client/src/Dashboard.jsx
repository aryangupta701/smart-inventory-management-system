import "./Styles/dashboard.css";
import LogoDash from "../assets/logoDash.png";
import Home from "../assets/Home.png";
import Inventory from "../assets/Inventory.png";
import Report from "../assets/Report.png";
import Suppliers from "../assets/Suppliers.png";
import Order from "../assets/Order.png";
import ManageStore from "../assets/ManageStore.png";
import LogOut from "../assets/LogOut.png";
import Settings from "../assets/Settings.png";
import NavInput from "../components/NavInput";
import ProfileIMG from "../assets/profileImg.jpg";
import cost from "../assets/Cost.png";
import Sales from "../assets/Sales.png";
import Revenue from "../assets/Revenue.png";
import Profit from "../assets/Profit.png";
import Purchase from "../assets/Purchase.png";
import Cancel from "../assets/Cancel.png";
import Quantity from "../assets/Quantity.png";
import OnTheWay from "../assets/OnTheWay.png";
import SupplierPro from "../assets/supplierProfile.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import { useState } from "react";
import SideBar from "../components/sideBar";

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
const salesItemData = (item) => {
  return (
    <div className="salesItemDiv">
      <img src={item.img} className="salesItemImg" />
      <section className="unitPriceSection">
        <h5>{item.price}</h5>
        <span>{item.unit}</span>
      </section>
    </div>
  );
};

const productSummery = (item) => {
  return (
    <div className="productContainer">
      <img src={item.img} className="productImg" />
      <h5>{item.quantity}</h5>
      <span>{item.discription}</span>
    </div>
  );
};

const sellingStockItem = (item) => {
  return (
    <div className="productHeaderBar">
      <span>{item.name} </span>
      <span>{item.soldQunatity} </span>
      <span>{item.remainingQuantity} </span>
      <span>{item.price} </span>
    </div>
  );
};

const renderLowStockItem = (item) => {
  return (
    <div className="lowStockContainer">
      <section className="imgNameSection">
        <img src={item.img} className="lowStockImg" />
        <div className="lowStockDiscrption">
          <h5 className="lowProductName">{item.productName}</h5>
          <p className="lowProctQuantity">
            Remaining Qunatity : {item.remainingQuantity}
          </p>
        </div>
      </section>
      <span className="lowStockStatus">{item.status}</span>
    </div>
  );
};
function Dashboard() {
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      img: Sales,
      price: "₹ 832",
      unit: "Sales",
    },
    {
      id: 2,
      img: Revenue,
      price: "₹ 18,300",
      unit: "Revenue",
    },
    {
      id: 3,
      img: Profit,
      price: "₹ 868",
      unit: "Profit",
    },
    {
      id: 4,
      img: cost,
      price: "₹ 17,432",
      unit: "Cost",
    },
  ]);
  const [purchaseData, setPurchaseData] = useState([
    {
      id: 1,
      img: Purchase,
      price: "82",
      unit: "Purchase",
    },
    {
      id: 2,
      img: cost,
      price: "₹ 13,757",
      unit: "Cost",
    },
    {
      id: 3,
      img: Cancel,
      price: "5",
      unit: "Cancel",
    },
    {
      id: 4,
      img: Profit,
      price: "₹ 17,432",
      unit: "Return",
    },
  ]);

  const [inventorySummery, setInventorySummery] = useState([
    {
      id: 1,
      img: Quantity,
      quantity: "837",
      discription: "Quantity in hand",
    },
    {
      id: 2,
      img: OnTheWay,
      quantity: "200",
      discription: "To be received",
    },
  ]);
  const [productData, setProductData] = useState([
    {
      id: 1,
      img: SupplierPro,
      quantity: "31",
      discription: "Number of Suppliers",
    },
    {
      id: 2,
      img: ManageStore,
      quantity: "21",
      discription: "Number of categories",
    },
  ]);
  const [topSellingStock, setTopSellingStock] = useState([
    {
      id: 1,
      name: "Surf Excel",
      soldQunatity: "30",
      remainingQuantity: "12",
      price: "₹ 100",
    },
    {
      id: 2,
      name: "Rin",
      soldQunatity: "21",
      remainingQuantity: "15",
      price: "₹ 207",
    },
    {
      id: 3,
      name: "Parle G",
      soldQunatity: "19",
      remainingQuantity: "17",
      price: "₹ 105",
    },
  ]);
  const [lowStock, setLowStock] = useState([
    {
      id: 1,
      img: product1,
      productName: "TATA Salt",
      remainingQuantity: "10 Packat",
      status: "Low",
    },
    {
      id: 2,
      img: product2,
      productName: "Lays",
      remainingQuantity: "15 Packat",
      status: "Low",
    },
    {
      id: 3,
      img: product2,
      productName: "Lays",
      remainingQuantity: "15 Packat",
      status: "Low",
    },
  ]);

  return (
    <div className="dashboardContainer">
      <SideBar />

      <div className="rightBar">
        <div className="navBar">
          <NavInput
            placeholder="Search product supplier order "
            profilePic={ProfileIMG}
          />
        </div>
        <article className="saleInventoryArticle">
          <section className="SalesSection">
            <h3 className="salesText">Sales Overview</h3>
            <div className="salesItemContainer">
              {salesData.map((item) => salesItemData(item))}
            </div>
          </section>

          <section className="inventorySection">
            <h3 className="salesText">Inventory Summery</h3>
            <div className="ineventroyItemContainer">
              {inventorySummery.map((item) => productSummery(item))}
            </div>
          </section>
        </article>

        <article className="saleInventoryArticle">
          <section className="SalesSection">
            <h3 className="salesText">Purchase Overview</h3>
            <div className="salesItemContainer">
              {purchaseData.map((item) => salesItemData(item))}
            </div>
          </section>
          <section className="inventorySection">
            <h3 className="salesText">Product Summery</h3>
            <div className="ineventroyItemContainer">
              {productData.map((item) => productSummery(item))}
            </div>
          </section>
        </article>

        <article className="saleInventoryArticle">
          <section className="barGraph"></section>

          <section className="curveGraph"></section>
        </article>

        <article className="saleInventoryArticle">
          <section className="topSellingSection">
            <div className="sellingStockHeader">
              <h3>Top Selling Stock</h3>
              <a className="seeAllTxt">See All</a>
            </div>
            <div className="productHeaderBar">
              <span>Name</span>
              <span>Sold Quantity</span>
              <span>Remaining Qunatity</span>
              <span>Price</span>
            </div>

            {topSellingStock.map((item) => sellingStockItem(item))}
          </section>

          <section className="lowQuality">
            <div className="sellingStockHeader">
              <h3>Low Quntity Stock</h3>
              <a className="seeAllTxt">See All</a>
            </div>
            {lowStock.map((item) => renderLowStockItem(item))}
          </section>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;
