import styles from "./Button.module.css"


export default function Button({ children }: any) {
  return (
    <button className ={styles.button} type="button" >
        <span className={styles.buttonInner}>{ children  }</span>
    </button>
  )
}
