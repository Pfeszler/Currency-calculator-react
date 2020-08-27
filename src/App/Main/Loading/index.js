import React from "react"
import {
    StyledLoading,
    Text
} from "./styled"

const Loading = ({ currencies }) => {
    return currencies.loading && (
        <StyledLoading>
            <Text>
                Prosimy o chwilkę cierpliwości, pobieramy dla Ciebie najbardziej aktualne kursy z Narodowego Banku Polskiego
            </Text>
        </StyledLoading>
    )
}

export default Loading