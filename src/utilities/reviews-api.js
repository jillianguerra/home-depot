import sendRequest from './send-request'

const BASE_URL = '/api/reviews'

export function getReviews(itemId){
    return sendRequest(`${BASE_URL}/${itemId}`)
  }
  export function addReview(itemId, content){
    return sendRequest(`${BASE_URL}/${itemId}`, `POST`, content)
  }
  export function editReview(itemId, content){
    return sendRequest(`${BASE_URL}/${itemId}`, 'PUT', content)
  }
  export function deleteReview(itemId){
    return sendRequest(`${BASE_URL}/${itemId}`, `DELETE`)
  }