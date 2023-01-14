import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Searchbar from './Searchbar/Searchbar'
import Loader from "./Loader/Loader";
import { fetchImgs } from './services/api'
import ImageGallary from './ImageGallery/ImageGallery'
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import '../styles.css'

class App extends Component {

  state = {
    imgs: null,
    totalImgs: null,
    isLoading: false,
    showModal: false,
    page: 1,
    query: '',
    largeImageURL: ''
  }

  searchImgs = async query => {
    if (query.length === 0) {
      return Notify.failure('Please enter something')
    }
    await this.setState({ isLoading: true, query, page: 1 })
    
    fetchImgs(query, this.state.page).then(data => {
      const { hits, totalHits } = data
      this.setState({ isLoading: false, totalImgs: totalHits })
      if (hits.length === 0) {
        return Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      }
      this.setState({ imgs: hits, page: this.state.page + 1 })
    })
  }

  onLoadMore = () => {
    const { query, page, imgs } = this.state
    
    this.setState({ isLoading: true })
    fetchImgs(query, page).then(data => {
      this.setState({ isLoading: false, imgs: [...imgs, ...data.hits], page: page + 1 })
    })
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  getlargeImageURL = largeImageURL => {
    this.setState({largeImageURL})
  }

  render() {
    const { imgs, isLoading, totalImgs, showModal, largeImageURL } = this.state
    const {toggleModal, searchImgs, getlargeImageURL, onLoadMore} = this
    
    return (
      <div className="app">
        {showModal && <Modal imgUrl={largeImageURL} toggleModal={toggleModal} />}
        <Searchbar onSubmit={searchImgs} />
        {isLoading && <Loader />}
        {imgs !== null ?
          (<>
            <ImageGallary imgs={imgs} toggleModal={toggleModal} onClick={getlargeImageURL} />
            {imgs.length !== totalImgs && <Button onClick={onLoadMore} />}
          </>)
        : null}
      </div>
    )
  }
}

export default App