import React from "react"
import "./style.css"


const Answer = ({answerValue}) => 
!!answerValue && 
        <p className="answer">
            Na rachunek powiązany z Twoim kontem zostało przelane
            {answerValue}
        </p>
    



export default Answer