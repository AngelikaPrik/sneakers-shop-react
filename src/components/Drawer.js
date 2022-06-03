import React from "react";

const Drawer = ({ onClose, addedItems = [], onRemove, total }) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {addedItems.length ? (
          <>
            <div className="cartItems">
              {addedItems.map((item) => {
                return (
                  <div key={item.id} className="cartItem d-flex align-center mb-20">
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                      className="cartItemImg  d-flex"
                    ></div>
                    <div className="mr-15">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price}pуб.</b>
                    </div>
                    <img
                      className="removeBtn"
                      src="/img/btn-remove.svg"
                      alt="Remove"
                      onClick={() => onRemove(item.id)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="cartTotalBlock">
              <ul className="mb-25">
                <li className="d-flex">
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow-btn.svg" alt="" />
              </button>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-center cartEmpty">
            <img
              width={120}
              height={120}
              alt="Cart"
              src="/img/empty-cart.png"
              className="mb-20"
            />
            <h3 className="mb-10">Корзина пустая</h3>
            <p className="mb-40 emptyText">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} className="greenButton backButton d-flex justify-center align-center">
              <img src="/img/back-cart-btn.svg" alt="" className="mr-20"/> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
