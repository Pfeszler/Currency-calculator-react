import styled from "styled-components"

export const StyledFailed = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
   height: 65vh;
`

export const Text = styled.p`
    color: ${({ theme }) => theme.color.red};
    font-weight: bold;
    font-size: 25px;
    width: 75%;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 90%;
        font-size: 20px;
    }
`