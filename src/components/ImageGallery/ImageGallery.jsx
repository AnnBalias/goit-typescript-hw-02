import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

const ImageGallery = ({ imgs, handModal }) => {
    
    return (
        <ul className={css.galleryList}>
            {imgs.length > 0 && imgs.map((img) => {
                return (
                    <li className={css.galleryitem} key={img.id} onClick={() => handModal(img)}>
                        <ImageCard img={img} />
	                </li>
                )
            })}
	    </ul>
    )
}

export default ImageGallery;