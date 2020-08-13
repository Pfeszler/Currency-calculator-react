import styled from "styled-components"
import img from "../image/money_banknotes_currency_forex_us_dollars_euro_baht_peso-551241.jpg"

export const StyledContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
    position: relative;
    z-index: 1;

&::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(240, 255, 255, 0.548);
    z-index: -1;
}
`