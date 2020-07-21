import React, { useState } from "react"
import "./style.css"

const Form = ({ currencies, buy }) => {
    const [amount, setAmount] = useState("")
    const [currencySelected, setCurrencySelected] = useState(currencies[0].name)

    return (
        <React.Fragment>
            <form className="form">
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
                                <select className="form__input"
                                    required
                                    name="currency"
                                    value={currencySelected}
                                    onChange= {({target}) => {setCurrencySelected(target.value);  console.log(target.value)}}>
                                    {currencies.map(currency =>
                                        <option value={currency.id}>{currency.name}</option>
                                    )}
                                </select>
                            </label>
                        </div>
                        <div className="form__inputContainer">
                            <label>
                                <span className="form__discription">
                                    Chcę wymienić <strong>()</strong>
                                </span>
                                <input className="form__input"
                                    name="to-exchange"
                                    required
                                    type="number"
                                    min="1"
                                    value={amount}
                                    onChange={({ target }) => setAmount(target.value)}
                                />
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
        </React.Fragment>
    )
};

export default Form