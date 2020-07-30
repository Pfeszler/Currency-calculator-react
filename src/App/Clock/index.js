import React from "react"
import "./style.css"

const Clock = ({ date }) => (
    <section className="clock">
        Dzisiaj jest {date.toLocaleString("pl",
            { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })}
    </section>
)

export default Clock