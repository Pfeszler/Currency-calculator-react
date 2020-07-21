import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header__text">Kantor wymiany walut</h1>
        <img className="header__logo" alt="logo" src="https://cdn.onlinewebfonts.com/svg/img_353628.png" />
      </header>
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
