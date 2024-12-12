import { FC } from "react";
import { Wordline } from "../../types/wordline";
import style from "./style.module.css";

type Props = {
    data: Wordline;
}

const Lineword: FC<Props> = ({ data }) => {
    return (
        <div className={style.item}>
            <div className={style.star}></div>
            <p>{data.text}</p>
        </div>
    )
}

export default Lineword;