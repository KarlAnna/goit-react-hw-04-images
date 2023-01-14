import PropTypes from 'prop-types';
import '../../styles.css'

const Button = ({ onClick }) => {
    return <button className="button" onClick={ onClick }>Load more</button>
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button