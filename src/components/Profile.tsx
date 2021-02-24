import styles from "../styles/components/Profile.module.css"

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/43863263?s=400&u=4c77a6cfa5561f1aff9844629df2381ae7f36db2&v=4" alt="Milena Mocci" />
      <div>
        <strong>Milena Mocci</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
          </p>
      </div>

    </div>
  )
}