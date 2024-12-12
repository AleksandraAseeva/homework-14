import style from "./style.module.css";
import Line from "../Line";

const Footer = () => {
    return (
        <section className={style.underside}>
            <div>
                <p className={style.name}>ALEX</p>
            </div>
            <div className={style.footer}>
                <Line />
                <div className={style.mainFooterContainer}>
                    <div className={style.imgLeft}></div>
                    <div className={style.mainContent}>
                        <div className={style.proposal}>
                            <p>A MORE MEANINGFUL HOME FOR WEBSITE</p>
                            <div className={style.letsContainer}>
                                <div className={style.lets}>
                                    <h1>LET’S</h1>
                                    <button className={style.iconButton}>
                                    </button>
                                </div>
                                <h1>WORK TOGETHER</h1>
                            </div>
                        </div>
                        <div className={style.footerList}>
                            <ol>HOME
                                <li>ABOUT ME</li>
                                <li>MY WORKS</li>
                                <li>TESTIMONIALS</li>
                            </ol>
                            <ol className={style.clientsOl}>CLIENTS
                                <li>KLOVESTO</li>
                                <li>NUKEWAY</li>
                                <li>CLOVEN’S</li>
                                <li>MENVOL</li>
                            </ol>
                            <ol>PORTFOLIO
                                <li>EVENTS</li>
                                <li>PORTRAIT</li>
                                <li>BRANDING</li>
                                <li>COMMERCIALE</li>
                                <li>WEDDING</li>
                            </ol>
                            <ol>SERVICES
                                <li>PORTRAITS</li>
                                <li>EVENTS</li>
                                <li>COMMERCIAL</li>
                            </ol>
                        </div>
                    </div>
                    <div className={style.imgRight}></div>
                </div>
                <div className={style.copy}>
                    <p className={style.policy}>Terms & Conditions <span></span> Privacy Policy</p>
                    <p className={style.policyMobile}>© 2024 Alex San Website. All rights reserved.</p>
                    <div className={style.social}>
                        <div className={style.facebook}></div>
                        <div className={style.twitter}></div>
                        <div className={style.insta}></div>
                    </div>
                    <p className={style.policy}>© 2024 Alex San Website. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;