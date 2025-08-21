import styles from "./Display.module.css"

export default function Display({children}: any) {
  return (
    <div className={styles.Display}>
        {children}
    </div>
  )
}
