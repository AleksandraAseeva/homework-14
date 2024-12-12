import style from "./style.module.css";
import data from "../../data/data.json";
import Lineword from "../Lineword";

const Line = () => {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.itemsWrap}>
                    <div className={style.itemsmarqueereverce}>

                        {data.items.map((word) => {
                            return <Lineword data={word} key={word.wordLineId}/>
                        })}
                        
                    </div>

                    <section className={style.itemsmarqueereverce}>

                    {data.items.map((word) => {
                            return <Lineword data={word} key={word.wordLineId}/>
                        })}
                        
                    </section>
                </div>
            </div>
        </>
    )
}

export default Line;