import { Img } from "../../App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
    img: Img;
}

const ImageCard = ({img} : ImageCardProps) => {
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