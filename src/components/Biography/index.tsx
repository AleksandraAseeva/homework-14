import style from "./style.module.css"

const Biography = () => {
    return (
        <div>
            <div className={style.about}>
                <div>
                    <p>ABOUT</p>
                    <h1>I AM ALEX</h1>
                </div>
                <button>Know More →</button>
            </div>
            <div className={style.group}>
                <div className={style.myPhoto}></div>
                <div className={style.intro}>
                    <div className={style.firstCont}>
                        <div className={style.introduction}>
                            <div className={style.introStar}></div>
                            <h3>Introduction</h3>
                        </div>
                        <p>My journey as a web developer has been a lifelong pursuit to transform ideas into engaging digital experiences, to create intuitive interfaces, and to share the brilliance of innovation through technology. Based in the dynamic landscape of the tech world, I draw inspiration from the ever-evolving trends and possibilities. Join me as we embark on a creative collaboration, where each website reflects a vision.</p>
                    </div>
                    <div className={style.secondCont}>
                        <div className={style.introduction}>
                            <div className={style.introStar}></div>
                            <h3>Contact Information</h3>
                        </div>
                        <div className={style.infoCont}>
                            <div className={style.email}>
                                <h4>Email</h4>
                                <p>aseevaaleksandra1@gmail.com</p>
                            </div>
                            <div className={style.phone}>
                                <h4>Phone Number</h4>
                                <p>+89880474565</p>
                            </div>
                        </div>
                        <div className={style.socialCont}>
                            <div className={style.social}>
                                <div className={style.facebook}></div>
                                <div className={style.twitter}></div>
                                <div className={style.insta}></div>
                            </div>
                            <div className={style.buttonCont}>
                                <button>Let’s Work</button>
                                <button>Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Biography