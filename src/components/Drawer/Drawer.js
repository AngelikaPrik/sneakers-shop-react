import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../../hooks/useCart";
import InfoDrawer from "../InfoDrawer";

import style from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, onRemove, items = [], opened }) => {
  const { addedItems, setAddedItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cartRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!e.path.includes(cartRef.current)) {
      onClose();
      console.log("click outside");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const clickToOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6290cc69665ea71fe13af76d.mockapi.io/orders",
        { items: addedItems }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setAddedItems([]);

      for (let i = 0; i < addedItems.length; i++) {
        const item = addedItems[i];
        await axios.delete(
          "https://6290cc69665ea71fe13af76d.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${style.overlay} ${opened ? style.overlayVisible : ""}`}>
      <div ref={cartRef} className={`${style.drawer} d-flex flex-column`}>
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <img
            onClick={onClose}
            className={`${style.removeBtn} cu-p`}
            src={process.env.PUBLIC_URL + "/img/btn-remove.svg"}
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className={style.cartItems}>
              {items.map((item) => {
                return (
                  <div
                    className={`${style.cartItem} d-flex align-center mb-20`}
                    key={item.id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + item.imageUrl
                        })`,
                      }}
                      className={`${style.cartItem_img}  d-flex`}
                    ></div>
                    <div className="mr-15">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price}pуб.</b>
                    </div>
                    <img
                      className={style.removeBtn}
                      src={process.env.PUBLIC_URL + "/img/btn-remove.svg"}
                      alt="Remove"
                      onClick={() => onRemove(item.id)}
                    />
                  </div>
                );
              })}
            </div>
            <div className={style.cartTotalBlock}>
              <ul className="mb-25">
                <li className="d-flex">
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(0)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={clickToOrder}
                className={style.greenButton}
              >
                Оформить заказ{" "}
                <img
                  src={process.env.PUBLIC_URL + "/img/arrow-btn.svg"}
                  alt=""
                />
              </button>
            </div>
          </div>
        ) : (
          <InfoDrawer
            image={
              isOrderComplete
                ? "/img/complete-order.png"
                : "/img/empty-cart.png"
            }
            w={isOrderComplete ? 83 : 120}
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
