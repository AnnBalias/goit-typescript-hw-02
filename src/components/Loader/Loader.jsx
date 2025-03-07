import { RotatingLines } from 'react-loader-spinner'
import css from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={css.loaderBox}>
            <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="grey"
                strokeColor="dimgray"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader;