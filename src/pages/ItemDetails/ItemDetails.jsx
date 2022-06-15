import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          <div className="main_img">
            <img
              width={302}
              height={280}
              src={process.env.PUBLIC_URL + imageUrl}
              alt=""
            />
          </div>
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
    </div>
  );
};

const arr = [
  {
    id: "1",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    description:
      "Эти Nike Blazer Mid 77 имеют стиль, который соответствует их ретро-дизайну. В зеленой замшевой конструкции блейзер имеет винтажный вид, выделенный ретро логотип Nike язык и старая школа 'NIKE' типографика на пятке. Белый Swoosh по бокам придает смелости этому классическому стилю. ",
    material:
      "Линия: 100% текстиль, подошва: 100% резина, верхняя: 100% текстиль.",
    price: 12999,
    imageUrl: "/img/sneakers/1.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "2",
    title: "Мужские Кроссовки Nike Air Max 270",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material:
      "Искусственная кожа, натуральная кожа, Внутренний материал - текстиль",
    price: 10599,
    imageUrl: "/img/sneakers/2.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "3",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    description:
      "Модель выполнена из переработанных материалов в рамках обязательств бренда по сокращению пластиковых отходов. 20% элементов верха минимум на 50% состоят из переработанных материалов.",
    material: "искусственная кожа, текстиль",
    price: 4900,
    imageUrl: "/img/sneakers/3.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "4",
    title: "Кроссовки Adidas grey Yung 1 Blue",
    description:
      "Вдохновленные архивной моделью adidas Falcon Dorf кроссовки Yung 1 воплощают современное видение ретро-стиля. Многослойный дизайн возрождает популярный тренд 90-х.",
    material: "Замша, Сетка",
    price: 5699,
    imageUrl: "/img/sneakers/4.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "5",
    title: "Мужские Кроссовки Under Armour Curry 8",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 9589,
    imageUrl: "/img/sneakers/5.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "6",
    title: "Мужские Кроссовки Nike Kyrie 7",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 8799,
    imageUrl: "/img/sneakers/6.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "7",
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 4999,
    imageUrl: "/img/sneakers/7.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "8",
    title: "Мужские Кроссовки Nike LeBron XVIII",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 3599,
    imageUrl: "/img/sneakers/8.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "9",
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 6349,
    imageUrl: "/img/sneakers/9.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "10",
    title: "Кеды Converse All Star Ox Low sneakers",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 4599,
    imageUrl: "/img/sneakers/10.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "11",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    description:
      "Кроссовки Puma X Aka Boku Future Rider для бега выполнены из текстиля и искусственной кожи.",
    material: "искусственная кожа, текстиль, Внутренний материал- текстиль",
    price: 7899,
    imageUrl: "/img/sneakers/11.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
  {
    id: "12",
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 5609,
    imageUrl: "/img/sneakers/12.png",
    size: ["36", "37", "37,5", "38", "39,5", "40", "40,5", "41"],
  },
];
export default ItemDetails;
