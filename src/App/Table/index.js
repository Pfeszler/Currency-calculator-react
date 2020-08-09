import React from "react"
import "./style.css"

const Table = ({ currencies }) => (
    <section
        className="table"
    >
        <table
            className="table__container"
        >
            <caption
                className="table__caption"
            >
                Tabela kursów walut
            </caption>
            <thead>
                <tr>
                    <th
                        className="table__header table__cell"
                    >Waluta
                    </th>
                    <th
                        className="table__header table__cell"
                    >
                        Kupno
                    </th>
                    <th
                        className="table__header table__cell"
                    >
                        Sprzedaż
                    </th>
                </tr>
            </thead>
            <tbody className="">
                {currencies.map(currency =>
                    <tr
                        key={currency.name}
                    >
                        <th
                            className="table__header table__cell"
                        >
                            {currency.name}
                        </th>
                        <td
                            className="table__cell"
                        >
                            {currency.buyprice}
                        </td>
                        <td
                            className="table__cell"
                        >
                            {currency.sellprice}
                        </td>
                    </tr>

                )}
            </tbody>
        </table>
    </section>
)

export default Table