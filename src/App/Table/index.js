import React from "react"
import { StyledTable, Container, Caption, Cell } from "./styled"

const Table = ({ currencies }) => {
    return currencies.rates.length > 0 && (

        <StyledTable>
            <Container>
                <Caption>
                    Tabela kursów walut aktualna na dzień {currencies.date}
            </Caption>
                <thead>
                    <tr>
                        <Cell
                            as="th"
                            header
                        >
                            Waluta
                    </Cell>
                        <Cell
                            as="th"
                            header
                        >
                            Kupno
                    </Cell>
                        <Cell
                            as="th"
                            header
                        >
                            Sprzedaż
                    </Cell>
                    </tr>
                </thead>
                <tbody>
                    {currencies.rates.map(currency =>
                        <tr
                            key={currency.code}
                        >
                            <Cell
                                as="th"
                                header
                            >
                                {currency.currency}
                            </Cell>
                            <Cell>
                                {currency.ask}
                            </Cell>
                            <Cell
                            >
                                {currency.bid}
                            </Cell>
                        </tr>

                    )}
                </tbody>
            </Container>
        </StyledTable>
    )
}

export default Table