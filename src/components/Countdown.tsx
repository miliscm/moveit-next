
import { useState, useEffect } from "react"
import styles from "../styles/components/Countdown.module.css"
export function Countdown() {

  const [time, setTime] = useState(25 * 60);
  const minutes = Math.floor(time / 60);
  const secounds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split("");
  const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }

  }, [active, time])


  function startCountdown() {
    setActive(true);

  }

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secoundLeft}</span>
          <span>{secoundRight}</span>
        </div>
      </div>
      <button type="button" className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
      </button>


    </div>
  )
}