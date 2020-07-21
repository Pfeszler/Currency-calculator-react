import React from "react"
import "./style.css"

const Table = ({ currencies }) => (
    <section className="table">
        <table className="table__container">
            <caption className="table__caption">
                Tabela kursów walut
                </caption>
            <thead>
                <th className="table__header table__cell">Waluta</th>
                <th className="table__header table__cell">Kupno</th>
                <th className="table__header table__cell">Sprzedaż</th>
            </thead>
            <tbody className="">
                {currencies.map(currency =>
                    <tr>
                        <th class="table__header table__cell">{currency.name}</th>
                        <td class="table__cell">{currency.buyprice}</td>
                        <td class="table__cell">{currency.sellprice}</td>
                    </tr>

                )}
            </tbody>
        </table>
    </section>
)

export default Table