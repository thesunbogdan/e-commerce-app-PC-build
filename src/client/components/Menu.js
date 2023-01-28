import React from "react";
import { Link } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../styles/Menu.scss";
const Menu = ({ openMenu, setOpenMenu }) => {
  const menuList = ["Home", "Shop", "Configure", "Contact"];
  return (
    <div className={`${openMenu ? "menu" : "hide"}`}>
      <div className="menu-close-icon">
        <CloseRoundedIcon
          color="error"
          fontSize="large"
          onClick={() => setOpenMenu(false)}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "5px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="menu-item-list">
        {menuList.map((listItem) =>
          listItem === "Home" ? (
            <Link className="menu-item" to="/">
              <p>{listItem}</p>
            </Link>
          ) : (
            <Link className="menu-item" to={listItem.toLowerCase()}>
              <p>{listItem}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
