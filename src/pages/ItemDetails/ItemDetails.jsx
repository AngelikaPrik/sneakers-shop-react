import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../Context";
import style from "./ItemDetails.module.scss";
import ContentLoader from "react-content-loader";

const ItemDetails = () => {
  const params = useParams();
  const { isLoading } = useContext(AppContext);
  const [item, setItem] = useState({});

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

  return (
    <div className="content p-40">
      <div className="d-flex justify-around">
        {isLoading ? (
          <ContentLoader
            speed={2}
            width={400}
            height={470}
            viewBox="0 0 400 470"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="536" y="264" rx="10" ry="10" width="150" height="15" />
            <rect x="0" y="0" rx="0" ry="0" width="380" height="380" />
            <rect x="0" y="402" rx="0" ry="0" width="380" height="60" />
          </ContentLoader>
        ) : (
          <div className={style.imageBlock}>
            <div>
              <img
                width={40}
                height={40}
                src={process.env.PUBLIC_URL + "/img/liked.png"}
                alt=""
              />
            </div>
            <div className="main_img">
              <img
                width={302}
                height={280}
                src={process.env.PUBLIC_URL + item.imageUrl}
                alt=""
              />
            </div>
          </div>
        )}

        <div className={style.textBlock}>
          <h2 className="mb-15">{item.title}</h2>
          <p className={style.itemDesc}>{item.description}</p>
          <div className="d-flex mt-30 mb-30">
            <h4>Материaл:</h4>
            <p className={style.material}>{item.material}</p>
          </div>
          <div className="d-flex align-center justify-between">
            <h4>Размер:</h4>
            <div className="d-flex ml-10">
              <div className={style.disabled}>36</div>
              <div className={style.size}>37</div>
              <div className={style.size}>37,5</div>
              <div className={style.disabled}>38</div>
              <div className={style.size}>39</div>
              <div className={style.size}>39,5</div>
              <div className={style.size}>40</div>
            </div>
          </div>
          <div className={style.price}>
            <h4>Цена:</h4>
            <strong className={style.price}>{item.price} руб.</strong>
          </div>
          <button className={style.greenButton}>Добавить в корзину</button>
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
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material:
      "Линия: 100% текстиль, подошва: 100% резина, верхняя: 100% текстиль.",
    price: 12999,
    imageUrl: "/img/sneakers/1.png",
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
  },
  {
    id: "3",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    description:
      "Модель выполнена из переработанных материалов в рамках обязательств бренда по сокращению пластиковых отходов. 20% элементов верха минимум на 50% состоят из переработанных материалов.",
    material: "искусственная кожа, текстиль",
    price: 4900,
    imageUrl: "/img/sneakers/3.png",
  },
  {
    id: "4",
    title: "Кроссовки Adidas grey Yung 1 Blue",
    description:
      "Вдохновленные архивной моделью adidas Falcon Dorf кроссовки Yung 1 воплощают современное видение ретро-стиля. Многослойный дизайн возрождает популярный тренд 90-х.",
    material: "Замша, Сетка",
    price: 5699,
    imageUrl: "/img/sneakers/4.png",
  },
  {
    id: "5",
    title: "Мужские Кроссовки Under Armour Curry 8",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 9589,
    imageUrl: "/img/sneakers/5.png",
  },
  {
    id: "6",
    title: "Мужские Кроссовки Nike Kyrie 7",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 8799,
    imageUrl: "/img/sneakers/6.png",
  },
  {
    id: "7",
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 4999,
    imageUrl: "/img/sneakers/7.png",
  },
  {
    id: "8",
    title: "Мужские Кроссовки Nike LeBron XVIII",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 3599,
    imageUrl: "/img/sneakers/8.png",
  },
  {
    id: "9",
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 6349,
    imageUrl: "/img/sneakers/9.png",
  },
  {
    id: "10",
    title: "Кеды Converse All Star Ox Low sneakers",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 4599,
    imageUrl: "/img/sneakers/10.png",
  },
  {
    id: "11",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    description:
      "Кроссовки Puma X Aka Boku Future Rider для бега выполнены из текстиля и искусственной кожи.",
    material: "искусственная кожа, текстиль, Внутренний материал- текстиль",
    price: 7899,
    imageUrl: "/img/sneakers/11.png",
  },
  {
    id: "12",
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    description:
      "Спортивные некоторые из самых разыскиваемых тренеров в игре, просматривать Air Max 90 и ВВС 1, а также стили Cortez и Joyride.",
    material: "",
    price: 5609,
    imageUrl: "/img/sneakers/12.png",
  },
];
export default ItemDetails;
