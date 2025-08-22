import styles from "./Result.module.css";



export default function Result({maxQuizLen, correctNumLen}:any) {
  return (
    <div className ={styles.result}>
        Your answered...
        <span className={styles.resultHighlight}>
            {`${correctNumLen}out of${maxQuizLen}`}
        </span>
        questions correctly!
    </div>
  )
}
