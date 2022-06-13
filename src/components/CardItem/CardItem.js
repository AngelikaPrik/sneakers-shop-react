import React, { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../Context";

import styles from "./CardItem.module.scss";

const CardItem = ({
  id,
  title,
  price,
  imageUrl,
  onAdd,
  onFavourite,
  fav = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavourite, setIsFavourite] = useState(fav);
  const obj = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onAdd(obj);
  };

  const onClickFavourite = () => {
    onFavourite(obj);
    setIsFavourite((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="107" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="126" rx="10" ry="10" width="93" height="15" />
          <rect x="0" y="163" rx="10" ry="10" width="80" height="24" />
          <rect x="118" y="155" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavourite && (
            <div className={styles.favourite} onClick={onClickFavourite}>
              <img
                width={32}
                height={32}
                src={process.env.PUBLIC_URL+(isFavourite ? "/img/liked.png" : "/img/unliked.png")}
                alt=""
              />
            </div>
          )}
          <img
            className="mb-15"
            width={133}
            height={112}
            alt=""
            src={process.env.PUBLIC_URL+imageUrl}
          />
          <h5 className="mb-15">{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className={styles.cardPrice}>Цена:</span>
              <b>{price} руб.</b>
            </div>

            {onAdd && (
              <img
                onClick={onClickPlus}
                className={styles.plus}
                src={process.env.PUBLIC_URL+(isItemAdded(id) ? "/img/btn-check.svg" : "/img/btn-plus.svg")}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CardItem;
