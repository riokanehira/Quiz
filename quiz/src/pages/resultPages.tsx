import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";

export default function ResultPages() {
  const location = useLocation();
  const maxQuizLen =location.state.maxQuizLen
  const correctNumLen =location.state.correctNumLen

  return (
    <>
      <h1>Result</h1>
      <p>あなたの正解数は</p>
      <p>{`${maxQuizLen}問中${correctNumLen}問でした`}</p>
      <br/>
      <Link to={ROUTES.HOME}>Try Again</Link>
    </>

  )
}
