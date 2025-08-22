import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "./components/Result/Result";
import Loading from "./components/Result/Loading/Loading";
import { useEffect, useState } from "react";

export default function ResultPages() {
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();
  const maxQuizLen =location.state.maxQuizLen
  const correctNumLen =location.state.correctNumLen

  useEffect(()=>{
    setTimeout(()=>setActive(true), 3000);

  }, [])

  return (
    <>

      <Loading active ={active}/>
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}/>
      <br/>
      <Link to={ROUTES.HOME}>Try Again</Link>
    </>

  )
}
