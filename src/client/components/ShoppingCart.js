import React from "react";
import "../styles/ShoppingCart.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import caseImage from "../assets/Carcasa pc.png";
import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = ({ openShoppingCart, setOpenShoppingCart }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={`${openShoppingCart ? "shopping-cart" : "none"}`}>
      <div
        className="shopping-cart-item"
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "black",
          border: "none",
          paddingTop: "10px",
        }}
      >
        <div className="shopping-cart-item-div">
          <CloseRoundedIcon
            style={{ cursor: "pointer" }}
            onClick={() => setOpenShoppingCart(false)}
            color="error"
            fontSize="large"
          />
        </div>
        <div
          className="shopping-cart-item-div"
          style={{ height: "auto", textAlign: "center" }}
        >
          <p>Nume</p>
        </div>
        <div className="shopping-cart-item-div">
          <p>Cant.</p>
        </div>
        <div className="shopping-cart-item-div">
          <p>Pret</p>
        </div>
        <div className="shopping-cart-item-div" />
      </div>
      {list.map((idx) => {
        return (
          <div className="shopping-cart-item">
            <div className="shopping-cart-item-div">
              <img src={caseImage} alt="case" />
            </div>
            <div className="shopping-cart-item-div">
              Sistem PC Gaming E-sport cu procesor Intel® Core™ i7-10700F 2.90
              GHz 16M Cache asff asdgsdfg fsdgfd dfgdfda ss
            </div>
            <div className="shopping-cart-item-div">
              <p>1</p>
            </div>
            <div className="shopping-cart-item-div">
              <p>5899,55 lei</p>
            </div>
            <div className="shopping-cart-item-div">
              <DeleteIcon sx={{ cursor: "pointer" }} />
            </div>
          </div>
        );
      })}

      <div className="shopping-cart-total">
        <p>
          <b>TOTAL:</b> &nbsp; 9 produse
        </p>
        <p>14.235,40 lei</p>
      </div>

      <button className="shopping-cart-checkout-btn">
        Proceed to checkout
      </button>
    </div>
  );
};

export default ShoppingCart;
