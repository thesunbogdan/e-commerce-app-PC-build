import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/NavBar.scss";
import Menu from "./Menu";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  return (
    <div className="navbar">
      <div className="menu-icon-and-logo">
        <div
          className="menu-icon"
          onClick={() => setOpenMenu((prevOpenMenu) => !prevOpenMenu)}
        >
          <MenuRoundedIcon
            sx={{ color: "#9d0208", fontSize: "44px", cursor: "pointer" }}
          />
        </div>
        <div className="logo">
          <p>CopiluPC</p>
        </div>
      </div>
      <div className="search-box">
        <input
          className="search-input"
          type="search"
          results={5}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="sign-in-and-cart">
        <div className="sign-in">
          <PersonIcon sx={{ color: "#9d0208" }} />
          <p>Sign In</p>
        </div>
        <div className="cart">
          <ShoppingCartIcon
            onClick={() =>
              setOpenShoppingCart(
                (prevOpenShoppingCart) => !prevOpenShoppingCart
              )
            }
            sx={{ color: "#9d0208" }}
          />
          <p>13.262,55 lei</p>
        </div>
      </div>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default NavBar;
