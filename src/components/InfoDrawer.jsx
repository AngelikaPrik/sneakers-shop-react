import React, { useContext } from "react";
import AppContext from "../Context";

const InfoDrawer = ({ image, w, title, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="d-flex flex-column align-center cartEmpty">
      <img width={w} alt="Cart" src={process.env.PUBLIC_URL+image} className="mb-20" />
      <h3 className="mb-10">{title}</h3>
      <p className="mb-40 emptyText">{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="greenButton backButton d-flex justify-center align-center"
      >
        <img src={process.env.PUBLIC_URL+"/img/back-cart-btn.svg"} alt="" className="mr-20" /> Вернуться
        назад
      </button>
    </div>
  );
};

export default InfoDrawer;
