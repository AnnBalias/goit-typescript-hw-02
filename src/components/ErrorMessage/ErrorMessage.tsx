import { IconContext } from 'react-icons';
import { PiSmileySadThin } from "react-icons/pi";
import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
        <div className={css.errorBox}>
            <IconContext.Provider value={{size: "120px", color: "dimgray"}}>
                <PiSmileySadThin />
            </IconContext.Provider>
            <p className={css.errorMessage}>
            <span  className={css.errorSpan}>oops!</span>
            Don't worry, try again later
            </p>
        </div>
    )
}

export default ErrorMessage;