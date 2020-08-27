import React from "react"
import { StyledAnswer } from "./styled"


const Answer = ({ answerValue, resultCode }) =>
    answerValue &&
    <StyledAnswer>
        Na rachunek powiązany z Twoim kontem zostało przelane
         <p>
            {answerValue}&nbsp;{resultCode}
        </p>
    </StyledAnswer>




export default Answer