import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from "./style.module.css"

const SwitchTheme = () => {
    const currentTheme = useContext(ThemeContext);
    console.log(currentTheme)

    const handleClick = () => {
        if (currentTheme?.theme === "dark") {
            currentTheme.setTheme("light")
        } else {
            currentTheme?.setTheme("dark")
        }
    }
    return <div onClick={handleClick} className={style.theme}>{currentTheme?.theme}</div>
};
export default SwitchTheme;