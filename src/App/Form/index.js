import React, { useState } from "react"
import Answer from "./Answer"
import "./style.css"


const Form = ({ currencies }) => {
    const [buy, setBuy] = useState(true)
    const [amount, setAmount] = useState("")
    const [currencySelected, setCurrencySelected] = useState(currencies[0].symbol)
    const [answerValue, setAnswerValue] = useState("")

    const currencyToUse = currencies.find(({ symbol }) => symbol === currencySelected)

    const resultSymbol = buy ? currencyToUse.symbol : "PLN"

    const onBuyChange = () =>
        setBuy(true);

    const onSellChange = () =>
        setBuy(false)

    const calculateResult = () => {
        if (buy) {
            return (Number(amount) / currencyToUse.buyprice).toFixed(2)
        }
        return (Number(amount) * currencyToUse.sellprice).toFixed(2)
    }

    const onFormSubmit = () =>
        setAnswerValue(calculateResult())


    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit()
            }
            }
        >
            <fieldset
                className="form__fieldset"
            >
                <legend
                    className="form__legend"
                >
                    Co chcesz zrobić?
                </legend>
                <div
                    className="form__flexbox"
                >
                    <ul
                        className="form__inputList"
                    >
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="what-you-gona-do"
                                    required
                                    checked={buy}
                                    onChange={() => {
                                        onBuyChange();
                                        setAnswerValue("");
                                    }}
                                />
                                <span
                                    className="form__discription"
                                >
                                    Kupuję
                                </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="what-you-gona-do"
                                    checked={!buy}
                                    onChange={() => {
                                        onSellChange()
                                        setAnswerValue("");
                                    }}
                                    required
                                />
                                <span
                                    className="form__discription"
                                >
                                    Sprzedaję
                                </span>
                            </label>
                        </li>
                    </ul>
                    <div
                        className="form__inputContainer"
                    >
                        <label>
                            <span
                                className="form__discription"
                            >
                                Wybierz walutę
                            </span>
                            <select
                                className="form__input"
                                required
                                name="currency"
                                value={currencySelected}
                                onChange={({ target }) => {
                                    setCurrencySelected(target.value);
                                    setAnswerValue("");
                                }}
                            >
                                {currencies.map(currency =>
                                    <option
                                        value={currency.symbol}
                                        key={currency.symbol}
                                    >
                                        {currency.name}
                                    </option>
                                )}
                            </select>
                        </label>
                    </div>
                    <div
                        className="form__inputContainer"
                    >
                        <label>
                            <span
                                className="form__discription"
                            >
                                Chcę wymienić
                                <strong>
                                    ({buy ? "PLN" : currencyToUse.symbol})
                                </strong>
                            </span>
                            <input
                                className="form__input"
                                name="to-exchange"
                                required
                                type="number"
                                min="1"
                                value={amount}
                                onChange={({ target }) => {
                                    setAmount(target.value);
                                    setAnswerValue("");
                                }}
                            />
                        </label>
                    </div>
                </div>
            </fieldset>
            <div
                className="form__text"
            >
                <p>
                    Otrzymasz
                    </p>
                <p
                    className="form__paragraph"
                >
                    {calculateResult()} ({resultSymbol})

                </p>
            </div>
            <button
                className="form__button"
            >Wymień
            </button>
            <Answer
                answerValue={answerValue}
                resultSymbol={resultSymbol}
            />
        </form>

    )
};

export default Form