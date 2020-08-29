import styled, { css } from "styled-components"

export const StyledTable = styled.section`
    max-width: 600px;
    overflow-x: auto;
    padding: 20px;
    margin: 0 auto;
`

export const Container = styled.table`
    border-collapse: collapse;
    width: 100%;
`

export const Caption = styled.caption`
    text-transform: uppercase;
    font-weight: bold;
    text-align: right;
    margin: 10px 0;
`

export const Cell = styled.td`
    padding: 20px;
    border: 3px solid #333;
    text-align: center;
    ${({ header }) => header && css`
        background: ${({ theme }) => theme.color.mint};
        text-transform: uppercase;
        font-weight: 400;
    `}
`