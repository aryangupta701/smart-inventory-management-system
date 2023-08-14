import NavInput from "../components/NavInput";
import SideBar from "../components/sideBar";
import "./Styles/inventory.css";
import ProfileIMG from "../assets/profileImg.jpg";
import { useState } from "react";
import FilterLine from "../assets/FiltersLines.png";

function Inventory() {
  const [categories, setCategories] = useState([
    { title: "Categories", quantity: "14", days: "Last 7 Days" },
  ]);
  const [totalProducts, setTotalProducts] = useState([
    {
      title: "Total Products",
      quantity: "868",
      days: "Last 7 days",
      price: "₹ 25000",
      type: "Revenue",
    },
  ]);
  const [topSelling, setTopSelling] = useState([
    {
      title: "Top selling",
      quantity: "5",
      days: "Last 7 days",
      price: "₹ 2500",
      type: "cost",
    },
  ]);
  const [lowStoks, setLowStock] = useState([
    {
      title: "Low Stocks",
      quantity: "12",
      days: "Ordered",
      price: "2",
      type: "Not in stock",
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      product: "Maggi",
      buyingPrice: "₹ 430",
      quantity: "43 packets",
      threshHoldValue: "12 packets",
      expiryDate: "11/12/22",
      availiblity: "In-stock",
    },
    {
      id: 2,
      product: "Bru",
      buyingPrice: "₹ 457",
      quantity: "4 packets",
      threshHoldValue: "14 packets",
      expiryDate: "11/12/22",
      availiblity: "out of stock",
    },
    {
      id: 3,
      product: "Red Bull",
      buyingPrice: "₹ 30",
      quantity: "40 packets",
      threshHoldValue: "17 packets",
      expiryDate: "01/12/22",
      availiblity: "In-stock",
    },
    {
      id: 4,
      product: "Bourn Vita",
      buyingPrice: "₹ 500",
      quantity: "26 packets",
      threshHoldValue: "7 packets",
      expiryDate: "24/12/22",
      availiblity: "In-stock",
    },
    {
      id: 5,
      product: "Maggi",
      buyingPrice: "₹ 430",
      quantity: "43 packets",
      threshHoldValue: "12 packets",
      expiryDate: "11/12/22",
      availiblity: "In-stock",
    },
    {
      id: 6,
      product: "Bru",
      buyingPrice: "₹ 457",
      quantity: "4 packets",
      threshHoldValue: "14 packets",
      expiryDate: "11/12/22",
      availiblity: "out of stock",
    },
    {
      id: 7,
      product: "Red Bull",
      buyingPrice: "₹ 30",
      quantity: "40 packets",
      threshHoldValue: "17 packets",
      expiryDate: "01/12/22",
      availiblity: "In-stock",
    },
    {
      id: 8,
      product: "Bourn Vita",
      buyingPrice: "₹ 500",
      quantity: "26 packets",
      threshHoldValue: "7 packets",
      expiryDate: "24/12/22",
      availiblity: "In-stock",
    },
    {
      id: 9,
      product: "Red Bull",
      buyingPrice: "₹ 30",
      quantity: "40 packets",
      threshHoldValue: "17 packets",
      expiryDate: "01/12/22",
      availiblity: "In-stock",
    },
  ]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  return (
    <div className="mainContainer">
      <SideBar />
      <div className="rightBar">
        <div className="navBar">
          <NavInput
            placeholder="Search product supplier order "
            profilePic={ProfileIMG}
          />
        </div>
        <section className="overallInventorySection">
          <h3>Overall Inventory</h3>
          <div className="inventoryMap">
            {categories.map((item) => {
              return (
                <>
                  <div className="categoriesMap">
                    <h4>{item.title}</h4>
                    <div className="categoroesTxt">
                      <span>{item.quantity}</span>
                      <span>{item.days}</span>
                    </div>
                  </div>
                </>
              );
            })}
            {totalProducts.map((item) => {
              return (
                <>
                  <div className="categoriesMap">
                    <h4>{item.title}</h4>
                    <section className="inventoryInnerItem">
                      <div className="qualityDaysdiv">
                        <span>{item.quantity}</span>
                        <span>{item.days} </span>
                      </div>
                      <div className="priceTypediv">
                        <span>{item.price} </span>
                        <span>{item.type} </span>
                      </div>
                    </section>
                  </div>
                </>
              );
            })}
            {topSelling.map((item) => {
              return (
                <>
                  <div className="categoriesMap">
                    <h4>{item.title}</h4>
                    <section className="inventoryInnerItem">
                      <div className="qualityDaysdiv">
                        <span>{item.quantity}</span>
                        <span>{item.days} </span>
                      </div>
                      <div className="priceTypediv">
                        <span>{item.price} </span>
                        <span>{item.type} </span>
                      </div>
                    </section>
                  </div>
                </>
              );
            })}
            {lowStoks.map((item) => {
              return (
                <>
                  <div className="categoriesMap">
                    <h4>{item.title}</h4>
                    <section className="inventoryInnerItem">
                      <div className="qualityDaysdiv">
                        <span>{item.quantity}</span>
                        <span>{item.days} </span>
                      </div>
                      <div className="priceTypediv">
                        <span>{item.price} </span>
                        <span>{item.type} </span>
                      </div>
                    </section>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <section className="productSection">
          <div className="productNavBar">
            <h3>Products</h3>
            <section className="buttonSection">
              <button className="addProductBtn">Add Product</button>
              <button className="filterBtn">
                <img src={FilterLine} className="filterImg" />
                Filters
              </button>
              <button className="filterBtn">Download all</button>
            </section>
          </div>
          <div className="listHeader">
            <span>Products</span>
            <span>Buying Price</span>
            <span>Quantity</span>
            <span>Threshold Value</span>
            <span>Expiry date</span>
            <span>Availity</span>
          </div>
          {products.map((item) => {
            return (
              <>
                <div className="productMap">
                  <span>{item.product}</span>
                  <span>{item.buyingPrice}</span>
                  <span>{item.quantity}</span>
                  <span>{item.threshHoldValue}</span>
                  <span>{item.expiryDate}</span>
                  <span>{item.availiblity}</span>
                </div>
                <div className="line"></div>
              </>
            );
          })}
          <div className="bottomBar">
            <button
              onClick={() => (pageNo - 1 > 0 ? setPageNo(pageNo - 1) : null)}
            >
              Privious
            </button>
            <p>
              Page {pageNo} of {totalPage}{" "}
            </p>
            <button
              onClick={() =>
                totalPage > pageNo ? setPageNo(pageNo + 1) : null
              }
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inventory;
