import PropTypes from 'prop-types';
import '../../styles.css'

const ImageGallaryItem = ({ webformatURL, largeImageURL, tags, onClick, toggleModal }) => {
    return (
        <li className="imageGalleryItem" onClick={toggleModal}>
            <img className="imageGalleryItem-image" src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL)} />
        </li>
    )
}

ImageGallaryItem.propTypes = {
    img: PropTypes.objectOf(PropTypes.exact({
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string
    })),
    onClick: PropTypes.func
}

export default ImageGallaryItem