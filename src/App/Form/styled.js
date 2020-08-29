import styled, { css } from "styled-components"

export const StyledFieldset = styled.div`
    padding: 20px;
    border: 3px solid ${({ theme }) => theme.color.mint};
`
export const Flexbox = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const InputList = styled.ul`
    list-style: none;
    flex-basis: 300px;
    `

export const InputContainer = styled.div`
    flex-basis: 300px;
    margin: 0 auto;
    text-align: center;
`

export const Discription = styled.span`
    display: block;
    margin: 10px 10px;
    
    ${({ inline }) => inline && css`
    display: inline-block;
    `}
`

export const StyledInput = styled.input`
    display: inline-block;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.color.mint};
`

export const Text = styled.div`
    max-width: 400px;
    padding: 10px;
    border: 3px solid ${({ theme }) => theme.color.mint};
    margin: 20px auto;
    text-align: center;
`

export const Paragraph = styled.p`
    display: block;
    height: 2em;
    font-weight: bold;
`

export const Button = styled.button`
    display: block;
    width: 200px;
    padding: 20px;
    border: 3px solid ${({ theme }) => theme.color.mint};
    background-color: transparent;
    margin: 20px auto;
    transition: 0.3s;

    &:hover {
    background-color: ${({ theme }) => theme.color.mint};
    };

    &:focus {
    filter: brightness(110%);
    outline: none;
    }

    &:active {
    filter: brightness(120%);
    outline: none;
    }
`




