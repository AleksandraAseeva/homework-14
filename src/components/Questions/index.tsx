import style from "./style.module.css";
import data from "../../data/data.json";
import Question from "../Question";

const Questions = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.flexCont}>
                <div className={style.titleQuestions}>
                    <p>FAQ’S</p>
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
                <div className={style.questions}>
                    <div className={style.leftQ}>

                        {data.questionsElleft.map((word) => {
                            return <Question data={word} key={word.questionId} />
                        })}

                    </div>
                    <div className={style.rightQ}>

                        {data.questionsElright.map((word) => {
                            return <Question data={word} key={word.questionId} />
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;