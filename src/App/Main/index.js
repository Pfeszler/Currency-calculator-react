import React from "react"
import { StyledMain } from "./styled"
import Failed from "./Failed"
import Loading from "./Loading"


const Main = ({ children, currencies }) =>
    <StyledMain>
        {children}
        <Failed currencies={currencies}/>
        <Loading currencies={currencies} />
    </StyledMain>

export default Main