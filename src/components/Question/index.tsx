import { useState } from "react";
import { FC } from "react";
import { QuestionType } from "../../types/questions";
import style from "./style.module.css";

type Props = {
    data: QuestionType;
}

const Question: FC<Props> = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className={style.questionAnswerCont}>
            <div className={style.qustionCont}>
                <p>{data.text}</p>
                <button onClick={() => { setIsVisible(!isVisible) }}>{data.upArrow}</button>
                {isVisible && <button onClick={() => { setIsVisible(!isVisible) }}>{data.downArrow}</button>}
            </div>
            {isVisible && <p className={style.answer}>{data.hiddenText}</p>}
        </div>
    )
}

export default Question;