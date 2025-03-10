import { Img } from "../../App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

interface GalleryProp {
    imgs: Img[];
    handModal: (img: Img) => void;
}

const ImageGallery = ({ imgs, handModal } : GalleryProp) => {
    return (
        <ul className={css.galleryList}>
            {imgs.length > 0 && imgs.map((img : Img) => {
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