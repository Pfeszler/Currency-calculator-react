import React from "react"
import {StyledAnswer} from "./styled"


const Answer = ({ answerValue, resultSymbol }) =>
    !!answerValue &&
    <StyledAnswer>
        Na rachunek powiązany z Twoim kontem zostało przelane
         <p>
            {answerValue}&nbsp;{resultSymbol}
        </p>
    </StyledAnswer>




export default Answer