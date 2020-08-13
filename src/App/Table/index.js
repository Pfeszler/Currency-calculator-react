import React from "react"
import { StyledTable, Container, Caption, Cell } from "./styled"

const Table = ({ currencies }) => (

    <StyledTable>
        <Container>
            <Caption>
                Tabela kursów walut
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
                {currencies.map(currency =>
                    <tr
                        key={currency.name}
                    >
                        <Cell
                            as="th"
                            header
                        >
                            {currency.name}
                        </Cell>
                        <Cell>
                            {currency.buyprice}
                        </Cell>
                        <Cell
                        >
                            {currency.sellprice}
                        </Cell>
                    </tr>

                )}
            </tbody>
        </Container>
    </StyledTable>
)

export default Table