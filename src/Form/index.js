import React, { useState } from "react"
import "./style.css"

const Form = ({ currencies }) => {
    const [buy, setBuy] = useState(true)
    const [amount, setAmount] = useState("")
    const [currencySelected, setCurrencySelected] = useState(currencies[0].id)
    const [answer, setAnswer] = useState("")
    const onBuyChange = () =>
        setBuy(true);

    const onSellChange = () =>
        setBuy(false)

    const calculateFinalValue = () => {
        if (buy) {
            return (Number(amount) / currencies[currencySelected].buyprice).toFixed(2)
        }
        return (Number(amount) * currencies[currencySelected].buyprice).toFixed(2)
    }

    const onFormSubmit = () =>
        setAnswer(`na rachunek powiązany z Twoim kontem zostało przelane
         ${calculateFinalValue()} ${buy ? currencies[currencySelected].symbol : "PLN"} `)

    return (
        <React.Fragment>
            <form className="form"
                onSubmit={(event) => {
                    event.preventDefault();
                    onFormSubmit()
                }
                }>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Co chcesz zrobić?</legend>
                    <div className="form__flexbox">
                        <ul className="form__inputList">

                            <li>
                                <label>
                                    <input type="radio"
                                        name="what-you-gona-do"
                                        required
                                        checked={buy}
                                        onChange={() => {
                                            onBuyChange();
                                            setAnswer("");
                                        }}
                                    />
                                    <span className="form__discription">Kupuję</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="radio"
                                        name="what-you-gona-do"
                                        checked={!buy}
                                        onChange={() => {
                                            onSellChange()
                                            setAnswer("");
                                        }}
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
                                    onChange={({ target }) => {
                                        setCurrencySelected(target.value);
                                        setAnswer("");
                                    }}>
                                    {currencies.map(currency =>
                                        <option value={currency.id}>{currency.name}</option>
                                    )}
                                </select>
                            </label>
                        </div>
                        <div className="form__inputContainer">
                            <label>
                                <span className="form__discription">
                                    Chcę wymienić <strong>({buy ? "PLN" : currencies[currencySelected].symbol})</strong>
                                </span>
                                <input className="form__input"
                                    name="to-exchange"
                                    required
                                    type="number"
                                    min="1"
                                    value={amount}
                                    onChange={({ target }) => {
                                        setAmount(target.value);
                                        setAnswer("");
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className="form__text">
                    <p>
                        Otrzymasz <strong>{calculateFinalValue()} ({buy ? currencies[currencySelected].symbol : "PLN"})

                                    </strong>
                    </p>
                    <p className="form__paragraph"> </p>
                </div>
                <button className="form__button">Wymień</button>
            </form>
            <p className="form__answer">
                {answer}
            </p>
        </React.Fragment>
    )
};

export default Form