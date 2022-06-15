import React from "react";
import style from "./InfoShipPay.module.scss";

const InfoShipPay = () => {
  const infoItems = [
    {
      img: "/img/shipping/local.svg",
      title: "Забрать в магазине",
      details: "Бесплатно / Сегодня",
      desc: "Уже через 30 мин после оформления можешь сам забрать заказ из магазина",
    },
	 {
      img: "/img/shipping/courier.svg",
      title: "Курьер",
      details: "От 500 руб. / 17 июня или позже",
      desc: "",
    },
	 {
      img: "/img/shipping/express.svg",
      title: "Экспресс-доставка",
      details: "600 руб. / Сегодня",
      desc: "Доставим в течение 4-х часов с момента заказа: 10.00 - 22.00",
    }
  ];

  return (
    <div>
      <h4 className="mb-25">Доставка и оплата</h4>
      <div className="d-flex justify-center">
		{infoItems.map((item, index) => (
			<div className={style.shipItem} key={index}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + item.img}
          />
          <h5>{item.title}</h5>
          <p className={style.detail}>{item.details}</p>
          <p>
            {item.desc}
          </p>
        </div>
		))}  
      </div>
    </div>
  );
};

export default InfoShipPay;
