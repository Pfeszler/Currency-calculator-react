import React, { useState } from "react"
import Answer from "./Answer"
import { StyledFieldset, Flexbox, InputList, InputContainer, Discription, StyledInput, Text, Paragraph, Button } from "./styled"


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
            onSubmit={(event) => {
                event.preventDefault();
                onFormSubmit()
            }
            }
        >
            <StyledFieldset>
                <legend
                >
                    Co chcesz zrobić?
                </legend>
                <Flexbox >
                    <InputList>
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
                                <Discription>
                                    Kupuję
                                </Discription>
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
                                <Discription>
                                    Sprzedaję
                                </Discription>
                            </label>
                        </li>
                    </InputList>
                    <InputContainer>
                        <label>
                            <Discription>
                                Wybierz walutę
                            </Discription>
                            <StyledInput
                                as="select"
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
                            </StyledInput>
                        </label>
                    </InputContainer>
                    <InputContainer>
                        <label>
                            <Discription>
                                Chcę wymienić
                                <strong>
                                    ({buy ? "PLN" : currencyToUse.symbol})
                                </strong>
                            </Discription>
                            <StyledInput
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
                    </InputContainer>
                </Flexbox >
            </StyledFieldset>
           <Text>
                <p>
                    Otrzymasz
                </p>
                <Paragraph>
                    {calculateResult()} ({resultSymbol})
                </Paragraph>
            </Text>
            <Button
                className="form__button"
            >Wymień
            </Button>
            <Answer
                answerValue={answerValue}
                resultSymbol={resultSymbol}
            />
        </form>

    )
};

export default Form