import React from "react"
import {
    StyledFailed,
    Text
} from "./styled"

const Failed = ({currencies}) => {
    return currencies.failed && (
        <StyledFailed>
        <Text>
            Ups, coś poszło nie tak. Sprawdź połączenie z internetem. Jeżeli wszystko jest w porządku, problem leży po naszej stronie.<br/> 
            Pracujemy nad rozwiązaniem, przepraszamy za niedogodności.
        </Text>
    </StyledFailed>
    )
}

export default Failed