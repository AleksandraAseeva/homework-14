import style from "./style.module.css";

const Services = () => {
    return (
        <div>
            <div className={style.ShortDesc}>
                <div className={style.inscriptions}>
                    <p>SERVICES</p>
                    <h1>MY WEB DEVELOPMENT SERVICES</h1>
                </div>
                <div className={style.buttons}>
                    <div className={style.switch}>
                        <button className={style.leftB}></button>
                        <button className={style.rightB}></button>
                    </div>
                    <button className={style.bigB}>View All Services →</button>
                </div>
            </div>
            <div className={style.longDesc}>
                <div className={style.eventsPhotoMobile}></div>
                <div className={style.events}>
                    <div className={style.basicInf}>
                        <div>
                            <h1>EVENTS</h1>
                            <button className={style.iconButton}></button>
                        </div>
                        <p>Our web development service aims to&nbsp;turn your ideas into unique online solutions. Whether it&nbsp;is&nbsp;a&nbsp;corporate website, an&nbsp;online store or&nbsp;a&nbsp;personal blog, we&nbsp;are ready to&nbsp;realize your desires. We&nbsp;dive into the details, creating intuitive and stylish experiences that highlight your brand.</p>
                    </div>
                    <div className={style.points}>
                        <p className={style.serviceHighlights}>Service Highlights</p>
                        <div className={style.point}>
                            <div className={style.smallStar}></div>
                            <p>BUSINESS CARD SITES, ONLINE STORES, BLOGS, CORPORATE SITES AND MORE.</p>
                        </div>
                        <div className={style.point}>
                            <div className={style.smallStar}></div>
                            <p>SKILLED DEVELOPERS ENTER KNOV NOV TO CRAFT YOUR DIGITAL PRESENCE.</p>
                        </div>
                        <div className={style.point}>
                            <div className={style.smallStar}></div>
                            <p>A BALANCE OF FUNCTIONAL DESIGN AND USER EXPERIENCE.</p>
                        </div>
                        <div className={style.point}>
                            <div className={style.smallStar}></div>
                            <p>FAST AND EFFICIENT DEVELOPMENT SO YOU CAN ENJOY YOUR WEBSITE IN NO TIME.</p>
                        </div>
                    </div>
                </div>

                <div className={style.eventsPhoto}></div>
            </div>
        </div>
    )
}

export default Services;