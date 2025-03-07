import css from "./ImageCard.module.css"

const ImageCard = ({img}) => {
    return (
        <div className={css.imgBox}>
            <img
                className={css.img}
                src={img.urls.small}
                alt={img.alt_description}
            />
        </div>
    )
}

export default ImageCard;