import style from "./style.module.css"
import SwitchTheme from "../SwitchTheme";
const Header = () => {
    return (
        <header>
            <div className={style.container}>
                <nav>
                    <p>ALEX</p>
                    <div className={style.navContainer}>
                        <ul>
                            <li className={style.firstLi}><a href="">Home</a></li>
                            <li><a href="">About Me</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li className={style.lastLi}><a href="">Services</a></li>
                        </ul>
                    </div>
                    
                    <button>Contact Me</button>
                    
                    
                    <button className={style.mobileButton}></button>
                </nav>
                <SwitchTheme/>
            </div>
            <div className={style.preview}>
                <div className={style.alex}>
                    <p>STUNNING SITES BY</p>
                    <h1>ALEX SAN</h1>
                </div>
                <div className={style.circle}></div>
                <div className={style.letsContainer}>
                    <div className={style.lets}>
                        <h1>LET’S</h1>
                        <button className={style.iconButton}>
                        </button>
                    </div>
                    <h1>WORK TOGETHER</h1>
                </div>
            </div>
            <div></div>
            
        </header>
    )
}


export default Header;