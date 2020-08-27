import { useState, useEffect } from "react"
import { useCurrency } from "../useCurrency"

export const useSelected = () => {

    const currencies = useCurrency();

    const [currencySelected, setCurrencySelected] = useState("USD")
    const [currencyToUse, setCurrencyToUse] = useState({ currency: "", code: "", ask: "", bid: "" })
    useEffect(() => {
        if (currencies.rates.length > 0) {
            setCurrencyToUse(currencies.rates.find(({ code }) => code === currencySelected))
        }

    }, [currencies.rates, currencySelected]);

    return [currencyToUse, currencySelected, setCurrencySelected]
}