import axios from 'axios';

export function fetchImgs(q, page) {
  const url = `https://pixabay.com/api/?q=${q}&page=${page}&key=31541699-c12f6c65df126c6d133dd330e&image_type=photo&orientation=horizontal&per_page=12`
  try {
    return axios.get(url).then(res => {
        return res.data
    })
  } catch (error) {
    console.error(error);
  }
}