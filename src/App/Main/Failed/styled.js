import styled from "styled-components"

export const StyledFailed = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
   height: 65vh;
`

export const Text = styled.p`
    color: red;
    font-weight: bold;
    font-size: 25px;
    width: 75%;
    text-align: center;
    @media (max-width: 767px) {
        width: 90%;
        font-size: 20px;
    }
`