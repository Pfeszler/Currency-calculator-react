import React, {useState, useEffect} from "react"
import "./style.css"



const Clock = () => {
    
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId =
      setInterval(
        () => { setDate(new Date()) },
        1000)
      ;
    return () => {
      clearInterval(intervalId)
    }
  },
    []);

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
    return (
        <section
            className="clock"
        >
            Dzisiaj jest  {dateFormat(date)}
        </section>
    )
}

export default Clock