import React from "react";

const Header = ({onOpenCart}) => {
	return ( 
		<header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li onClick={onOpenCart} className="mr-30 d-flex align-center cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/favourite.svg" alt="" />
          </li>
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
	 );
}
 
export default Header;