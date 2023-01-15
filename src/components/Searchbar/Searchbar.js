import PropTypes from 'prop-types';
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles.css'

export default function Searchbar({ onSubmit }) {
    
    const [searchValue, setSearchValue] = useState('')

    const formSubmitHandler = e => {
        e.preventDefault()
        if (searchValue.trim() === '') {
            return toast.error("Please, enter something")
        }
        onSubmit(searchValue)
        setSearchValue('')
    }

    const handlesearchValueChange = e => {
        setSearchValue(e.currentTarget.value.toLowerCase())
    }


    return (
        <>
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
        <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func
}
