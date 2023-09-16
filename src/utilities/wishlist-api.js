import sendRequest from './send-request'

const BASE_URL = '/api/wishlist'

export function showWishlist() {
  return sendRequest(`${BASE_URL}/`)
}

export function addToWishlist(itemId) {
  return sendRequest(`${BASE_URL}/add/${itemId}`, 'POST')
}

export function removeFromWishlist(itemId) {
  return sendRequest(`${BASE_URL}/remove/${itemId}`, 'PUT')
}