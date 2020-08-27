import { useState, useEffect } from "react"

export const useCurrency = () => {

    const [ratesData, setRatesData] = useState({
        loading: true,
        date: "",
        failed: false,
        rates: []
    });

    const downloadRates = async (ratesData, setRatesData) => {
        try {
            const response = await fetch("http://api.nbp.pl/api/exchangerates/tables/c/");
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();
            setRatesData({
                ...ratesData,
                loading: false,
                date: data[0].effectiveDate,
                rates: data[0].rates
            });
        }
        catch (error) {
            setRatesData({
                ...ratesData,
                loading: false,
                failed: true
            });
        };
    };

    useEffect(() => {
        setTimeout(() => {
            downloadRates(ratesData, setRatesData)
        }, 2000)
    }, []);

    return ratesData
};

