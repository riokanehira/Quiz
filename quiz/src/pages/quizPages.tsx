import Display from "./components/Display/Display"
import quizData from "../data/quiz"
import Button from "./components/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function QuizPages() {
    const [quizIndex,setQuizIndex] =useState<number>(0);
    const [answerLogs, setAnswerLogs] = useState<boolean[]>([]);
    const navigaiton = useNavigate();
    const MAX_QUIZ_LEN =quizData.length;




    const handleClick =(clickedIndex: number) =>{
      if (clickedIndex === quizData[quizIndex].answerIndex ){
        setAnswerLogs((prev) => [...prev, true]);
      }else{
        setAnswerLogs((prev) => [...prev, false]);
      }
      setQuizIndex((prev) => prev +1);
    }

    useEffect(() => {
      if (answerLogs.length === MAX_QUIZ_LEN){
        const correctNum = answerLogs.filter((answer) =>{
          return answer === true;
        })
        navigaiton(ROUTES.RESULT, {
          state:{
            maxQuizLen: MAX_QUIZ_LEN,
            correctNum: correctNum

          }
        });
      }
    },[answerLogs, MAX_QUIZ_LEN, navigaiton]);
  
    return (
    <>
    {quizData[quizIndex] && <Display>
        {`Q1 ${quizData[quizIndex].question}`}
    </Display>}
    {
      quizData[quizIndex].options.map((option,index)=>{
        return (
        <Button key ={`option-${index}`} onClick={() =>handleClick(index)}>
          {option}
        </Button>
      )

      })
    }

    
    
    </>
  )
}