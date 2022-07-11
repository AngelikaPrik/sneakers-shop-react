import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoShipPay from "../../components/InfoShipPay/InfoShipPay";
import AppContext from "../../Context";
import style from "./ItemDetails.module.scss";

const SIZEITEM_PAGE = 230;

const ItemDetails = () => {
  const params = useParams();
  const { onAddToCart } = useContext(AppContext);
  const [item, setItem] = useState({});
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getItemDetails(params.id);
    window.scrollTo(0, 0);
  }, []);

  const getItemDetails = async (id) => {
    try {
      const itemResponse = await axios.get(
        "https://6290cc69665ea71fe13af76d.mockapi.io/sneakers/" + id
      );
      setItem(itemResponse.data);
    } catch (error) {
      alert("Ошибка при запросе данных");
    }
  };

  const handleLeftArrowClick = () => {
		setOffset( (currentOffset) => {
			const newOffset = currentOffset + SIZEITEM_PAGE;
			return Math.min(newOffset, 0);
		})
	}

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SIZEITEM_PAGE;

      const maxOffset = -(SIZEITEM_PAGE * (2 - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  const { imageUrl, description, material, price, size } = item;

  return (
    <div className="content p-40">
      <div className="d-flex justify-around">
        <div className={style.imageBlock}>
          <div>
            <img
              width={40}
              height={40}
              src={process.env.PUBLIC_URL + "/img/unliked.png"}
              alt=""
            />
          </div>
          <div>
            <img
              width={302}
              height={280}
              src={process.env.PUBLIC_URL + imageUrl}
              alt=""
            />
          </div>
          <div className={style.preview}></div>
        </div>
        <div className={style.textBlock}>
          <h2 className="mb-15">{item.title}</h2>
          <p className={style.itemDesc}>{description}</p>
          <div className="d-flex mt-30 mb-30">
            <h4>Материaл:</h4>
            <p className={style.material}>{material}</p>
          </div>
          <div className="d-flex align-center justify-between">
            <h4 className="mr-10">Размер:</h4>
            <img
              onClick={handleLeftArrowClick}
              className="mr-10 cu-p"
              src={process.env.PUBLIC_URL + "/img/arr_size_left.svg"}
              alt=""
              style={offset ? {display: "block"} : {display: "none"}}
            />
            <div className={style.sizeBlock}>
              <div className="d-flex ml-10">
                {size?.map((item, index) => {
                  return (
                    <div
                      style={{
                        transform: `translateX(${offset}px)`,
                      }}
                      key={index}
                      className={style.size}
                      onClick={() => console.log(item)}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
            <img
              onClick={handleRightArrowClick}
              className="ml-10 cu-p"
              src={process.env.PUBLIC_URL + "/img/arr_size.svg"}
              alt=""
              style={offset < -200 ? {display: "none"} : {display: "block"}}
            />
          </div>
          <div className={style.price}>
            <h4>Цена:</h4>
            <strong className={style.price}>{price} руб.</strong>
          </div>
          <button
            onClick={() => onAddToCart(item)}
            className={style.greenButton}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className={style.infoBlock}>
      <InfoShipPay/>
      </div>
    </div>
  );
};


export default ItemDetails;
