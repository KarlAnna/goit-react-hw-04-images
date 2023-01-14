import PropTypes from 'prop-types';
import ImageGallaryItem from '../ImageGalleryItem/ImageGalleryItem'
import '../../styles.css'

const ImageGallary = ({ imgs, toggleModal, onClick }) => {
    return (
        <ul className="imageGallery">
            {imgs.map((img) => 
                // <li key={img.id} className="imageGalleryItem" onClick={toggleModal}>
                <ImageGallaryItem 
                    key={img.id}
                    webformatURL={img.webformatURL} 
                    largeImageURL={img.largeImageURL} 
                    tags={img.tags}
                    onClick={onClick} 
                    toggleModal={toggleModal}
                />
                // </li>
            )}
        </ul>
    )
}

ImageGallary.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string
    })),
    toggleModal: PropTypes.func,
    onClick: PropTypes.func
}

export default ImageGallary