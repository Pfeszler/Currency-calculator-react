import React from "react"
import "./style.css"


const Answer = ({ answerValue, resultSymbol }) =>
    !!answerValue &&
    <p
        className="answer"
    >
        Na rachunek powiązany z Twoim kontem zostało przelane
         <p>
            {answerValue}&nbsp;{resultSymbol}
        </p>
    </p>




export default Answer