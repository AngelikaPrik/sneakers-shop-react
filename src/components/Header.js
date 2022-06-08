import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context";

const Header = ({ onOpenCart }) => {
  const {addedItems} = useContext(AppContext);
  const totalPrice = addedItems.reduce((sum, obj) => Number(obj.price) + sum, 0);
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li onClick={onOpenCart} className="mr-30 d-flex align-center cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>{totalPrice <= 0 ? null : `${totalPrice} руб.`}</span>
        </li>
        <li className="mr-30 d-flex align-center">
          <Link to="/favourites">
            <img
              width={18}
              height={18}
              src="/img/favourite.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li className="mr-30 d-flex align-center">
          <img width={18} height={18} src="/img/user.svg" alt="Позователь" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
