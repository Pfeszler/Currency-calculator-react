import React from 'react';
import Header from "./Header"

const currencies = [
  { id: 1, name: "dolar amerykański", symbol: "USD", buyprice: 3.9384, sellprice: 4.0180 },
  { id: 2, name: "euro", symbol: "EUR", buyprice: 4.4189, sellprice: 4.5081 },
  { id: 3, name: "funt brytyjski", symbol: "GPB", buyprice: 4.9386, sellprice: 5.0384 },
  { id: 4, name: "frank szwajcarski", symbol: "CHF", buyprice: 4.1437, sellprice: 4.2275 },
  { id: 5, name: "korona norweska", symbol: "NOK", buyprice: 0.4113, sellprice: 0.4197 },
  { id: 6, name: "korona czeska", symbol: "CZK", buyprice: 0.1660, sellprice: 0.1694 },
]



function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <form className="form js-form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Co chcesz zrobić?</legend>
            <div className="form__flexbox">
              <ul className="form__inputList">

                <li>
                  <label>
                    <input type="radio" name="what-you-gona-do" value="buy"
                      required checked />
                    <span className="form__discription">Kupuję</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="what-you-gona-do" value="sell"
                      required />
                    <span className="form__discription">Sprzedaję</span>
                  </label>
                </li>
              </ul>
              <div className="form__inputContainer">
                <label>
                  <span className="form__discription">
                    Wybierz walutę
                            </span>
                  <select className="form__input" required name="currency">
                  </select>
                </label>
              </div>
              <div className="form__inputContainer">
                <label>
                  <span className="form__discription">
                    Chcę wymienić <strong>()</strong>
                  </span>
                  <input className="form__input" name="to-exchange" required type="number"
                    min="1" />
                </label>
              </div>
            </div>
          </fieldset>
          <div className="form__text">
            <p>
              Otrzymasz <strong>()</strong>
            </p>
            <p className="form__paragraph"> </p>
          </div>
          <button className="form__button">Wymień</button>
        </form>
        <p className="form__answer">

        </p>
        <section className="table__container">
          <table className="table">
            <caption className="table__caption">
              Tabela kursów walut
                </caption>
            <thead>
              <th className="table__header table__cell">Waluta</th>
              <th className="table__header table__cell">Kupno</th>
              <th className="table__header table__cell">Sprzedaż</th>
            </thead>
            <tbody className="">

            </tbody>
          </table>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">
          Nie jesteśmy prawdziwym kantorem. ale i tak możesz przesłać nam pieniądze. Gwarantujemy. że ich nie
          odzyskasz!
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
