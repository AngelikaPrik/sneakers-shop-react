import React from "react";
import { Link } from "react-router-dom";

const Info = ({ image, w, title, description }) => {
  return (
    <div className="d-flex flex-column align-center cartEmpty">
      <img width={w} alt="Cart" src={process.env.PUBLIC_URL+image} className="mb-20" />
      <h3 className="mb-10">{title}</h3>
      <p className="mb-40 emptyText">{description}</p>
      <Link to="/">
      <button className="greenButton backButton d-flex justify-center align-center">
        <img src={process.env.PUBLIC_URL+"/img/back-cart-btn.svg"} alt="" className="mr-20" /> 
        Вернуться
        назад
      </button>
      </Link>
      
    </div>
  );
};

export default Info;
