import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ loadMore }) => {
    return (
        <button className={css.moreBtn} onClick={loadMore}>
            Load more
        </button>
    )
}

export default LoadMoreBtn;