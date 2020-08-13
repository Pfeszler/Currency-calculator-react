import React from "react"
import { useCurrentDate } from "./useCurrentDate"
import { StyledClock } from "./styled"

const dateFormat = (date) => date.toLocaleString("pl",
    {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest  {dateFormat(date)}
        </StyledClock>
    )
}

export default Clock