import PropTypes from 'prop-types';
import { Component } from "react";
import { createPortal } from "react-dom"
import '../../styles.css'


const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.toggleModal()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal()
        }
    }
    


    render() {
        return createPortal(
            <div className="overlay" onClick={this.handleOverlayClick}>
                <div className="modal">
                    <img width={1000} src={this.props.imgUrl} alt="" />
                </div>
            </div>,
            modalRoot
        )
    }
}

Modal.propTypes = {
    imgUrl: PropTypes.string,
    toggleModal: PropTypes.func
}

export default Modal