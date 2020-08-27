import React, { useState } from "react"
import { useSelected } from "./useSelected"
import Answer from "./Answer"
import { StyledFieldset, Flexbox, InputList, InputContainer, Discription, StyledInput, Text, Paragraph, Button } from "./styled"



const Form = ({ currencies }) => {
    const [buy, setBuy] = useState(true)
    const [amount, setAmount] = useState("")
    const [answerValue, setAnswerValue] = useState("")

    const [currencyToUse, currencySelected, setCurrencySelected] = useSelected()

    const resultCode = buy ? currencyToUse.code : "PLN"

    const calculateResult = () => {
        if (buy) {
            return (Number(amount) / currencyToUse.ask).toFixed(2)
        }
        return (Number(amount) * currencyToUse.bid).toFixed(2)
    }

    const onBuyChange = () =>
        setBuy(true);
    const onSellChange = () =>
        setBuy(false)
    const onFormSubmit = () =>
        setAnswerValue(calculateResult())

    return currencies.rates.length > 0 && (
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
                                <Discription
                                    inline
                                >
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
                                <Discription
                                    inline
                                >
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
                                {currencies.rates.map(currency =>
                                    <option
                                        value={currency.code}
                                        key={currency.code}
                                    >
                                        {currency.currency}
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
                                    ({buy ? "PLN" : currencyToUse.code})
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
                    {calculateResult()} ({resultCode})
                </Paragraph>
            </Text>
            <Button>
                Wymień
            </Button>
            <Answer
                answerValue={answerValue}
                resultCode={resultCode}
            />
        </form>

    )
};

export default Form