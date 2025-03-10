import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
    loadMore: () => void;
}

const LoadMoreBtn = ({ loadMore } : LoadMoreBtnProps) => {
    return (
        <button className={css.moreBtn} onClick={loadMore}>
            Load more
        </button>
    )
}

export default LoadMoreBtn;