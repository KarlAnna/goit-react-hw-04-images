import PropTypes from 'prop-types';
import React, { Component } from "react";
import { BsSearch } from "react-icons/bs";
import '../../styles.css'

class Searchbar extends Component {
    
    state = {
        searchValue: ''
    }

    formSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.searchValue)
    }

    handlesearchValueChange = (e) => {
        this.setState({searchValue: e.target.value})
    }


    render() {
        const {formSubmitHandler, handlesearchValueChange} = this
        return (
        <header className="searchbar">
            <form onSubmit={formSubmitHandler} className="searchForm">
                <button type="submit" className="searchForm-button">
                    <BsSearch />
                    <span className="searchForm-button-label">Search</span>
                </button>

                    <input
                        onChange={handlesearchValueChange}
                className="searchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}

export default Searchbar