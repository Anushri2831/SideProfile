import React from "react";
import "./OrderSummary.css";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div className="search-bar">
        <input type="text" placeholder="Find food or beverages" />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <div className="customer-info">
        <h3>
          Customer Information
          <span className="info-icon">ℹ</span>
        </h3>
        <div className="customer-details">
          <label>Customer name</label>
          <input type="text" value="Emir Abiyyu" readOnly />
        </div>
        <div className="person-count">
          <label>Number of person</label>
          <div className="person-box">
            <span>12 Person Table</span>
            <div className="counter">
              <button>-</button>
              <span>12</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="current-order">
        <h3>Current Order</h3>
        <div className="order-list">
          <div className="order-item">
            <img src="https://th.bing.com/th?id=OSK.a5fc2506b4eaf08dabe0ff7a5065e95a&w=166&h=166&rs=2&qlt=80&o=6&cdv=1&pid=16.1" alt="Japanese Chicken Gyoza" />
            <div className="item-info">
              <p>Japanese Chicken Gyoza</p>
              <span className="price">Rp 81.700,00</span>
              <div className="counter">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
          </div>

          <div className="order-item">
            <img src="https://martking.ng/wp-content/uploads/2022/07/avocado-dark-wood-martking-online-grocery-lagos-e1658945256763.jpeg" />
            <div className="item-info">
              <p>2pcs of Amazing Avocado</p>
              <span className="price">Rp 68.000,00</span>
              <div className="counter">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
          </div>

          <div className="order-item">
            <img src="https://cdn.shopify.com/s/files/1/1191/1722/articles/babytoddler_Fox_food_1200x_49e6319f-67e0-41fd-b135-c517044bdec5_1000x1000.jpg?v=1643883194" alt="Healthy Kids Meal" />
            <div className="item-info">
              <p>Healthy Kids Meal</p>
              <span className="price">Rp 83.000,00</span>
              <div className="counter">
                <button>-</button>
                <span>4</span>
                <button>+</button>
              </div>
            </div>
             </div>

             <div className="order-item">
            <img src="https://cdn.pixabay.com/photo/2017/06/17/19/16/croissant-2413245_1280.jpg" />
            <div className="item-info">
              <p>Krosang Thats it</p>
              <span className="price">Rp 83.000,00</span>
              <div className="counter">
                <button>-</button>
                <span>4</span>
                <button>+</button>
              </div>
            </div>
             </div>


        </div>
      </div>

      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>Rp 1.298.000,00</span>
        </div>
        <div className="summary-item">
          <span>Discount sales</span>
          <span>- Rp 120.000,00</span>
        </div>
        <div className="summary-item">
          <span>Total tax</span>
          <span>Rp 40.000</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>Rp 1.218.000,00</span>
        </div>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default OrderSummary;