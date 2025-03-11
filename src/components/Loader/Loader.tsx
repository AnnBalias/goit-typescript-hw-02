import { RotatingLines } from 'react-loader-spinner'
import css from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={css.loaderBox}>
            <RotatingLines
                width="50"
                strokeColor="dimgray"
            />
        </div>
    )
}

export default Loader;