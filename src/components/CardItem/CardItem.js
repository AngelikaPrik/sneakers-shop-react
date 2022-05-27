import React, { useState } from "react";

import styles from "./CardItem.module.scss";

const CardItem = ({title, price, image, onAddItem}) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(prev => !prev);
    
  }
  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img width={32} height={32} src="/img/heart-inactive.png" alt="" />
      </div>
      <img className="mb-15" width={133} height={112} alt="" src={image} />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className={styles.cardPrice}>Цена:</span>
          <b>{price} руб.</b>
        </div>
        
          <img 
          width={32} 
          height={32} 
          onClick={onClickPlus} 
          className={styles.plus} 
          src={isAdded ? "/img/btn-check.svg" : "/img/btn-plus.svg"} alt="" />
        
      </div>
    </div>
  );
};

export default CardItem;