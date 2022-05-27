function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between align-center mb-30">Корзина
          <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
          </h2>
          <div className="cartItems">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg  d-flex"
              ></div>
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 pуб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
                className="cartItemImg  d-flex"
              ></div>
              <div className="mr-15">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 pуб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
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
            <button className="greenButton">Оформить заказ <img src="/img/arrow-btn.svg" alt=""/></button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
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
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img width={14.25} height={14.25} alt="" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex justify-between flex-wrap">
          <div className="card">
            <div className="favourite">
              <img
                width={32}
                height={32}
                src="/img/heart-inactive.svg"
                alt=""
              />
            </div>
            <img width={133} height={112} alt="" src="/img/sneakers/1.png" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="cardPrice">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favourite">
              <img
                width={32}
                height={32}
                src="/img/heart-inactive.svg"
                alt=""
              />
            </div>
            <img width={133} height={112} alt="" src="/img/sneakers/2.png" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="cardPrice">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favourite">
              <img
                width={32}
                height={32}
                src="/img/heart-inactive.svg"
                alt=""
              />
            </div>
            <img width={133} height={112} alt="" src="/img/sneakers/3.png" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="cardPrice">Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favourite">
              <img
                width={32}
                height={32}
                src="/img/heart-inactive.svg"
                alt=""
              />
            </div>
            <img width={133} height={112} alt="" src="/img/sneakers/4.png" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="cardcardPrice">Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
