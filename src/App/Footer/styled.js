import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.color.mint};
    width: 100%;
    margin-top: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    text-align: center;
    font-weight: bold;
`
