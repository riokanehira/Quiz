import { Link } from "react-router-dom"
import { ROUTES } from "../const"

function Home(){
    return(
        <>
            <h1>Quiz App</h1>
            <Link to ={ ROUTES.QUIZ}>Start!</Link>
        
        </>
    )
}
 
export default Home