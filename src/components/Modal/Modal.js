import PropTypes from 'prop-types';
import { useEffect } from "react";
import { createPortal } from "react-dom"
import '../../styles.css'


const modalRoot = document.querySelector('#modal-root')

export default function Modal({ imgUrl, toggleModal }) {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                toggleModal()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [toggleModal])

    const handleOverlayClick = e => {
        const { currentTarget, target} = e
        if (currentTarget === target) {
            toggleModal()
        }
    }
    

    return createPortal(
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <img width={1000} src={imgUrl} alt="" />
            </div>
        </div>,
        modalRoot
    )
}

Modal.propTypes = {
    imgUrl: PropTypes.string,
    toggleModal: PropTypes.func
}