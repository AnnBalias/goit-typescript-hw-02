import Modal from 'react-modal';
import css from "./ImageModal.module.css"
import { Img } from '../../App.types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  }
};

interface ImageModalProps {
    modalOpn : boolean;
    handClose : () => void;
    selectImg : Img | null;
}

const ImageModal = ({ modalOpn, handClose, selectImg } : ImageModalProps) => {
   
    return (
        <Modal
            isOpen={modalOpn}
            onRequestClose={handClose}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
            <div className={css.modalBox}></div>
            {selectImg &&
                <img 
                    className={css.modalImg}
                    src={selectImg.urls.regular}
                    alt={selectImg.alt_description}
                />
            } 
        </Modal>
    )
}

export default ImageModal;