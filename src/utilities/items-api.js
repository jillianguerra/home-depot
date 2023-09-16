import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
	return sendRequest(BASE_URL);
}
export function getFeaturedItems() {
	return sendRequest(`${BASE_URL}/featured`);
}
export function getByCategory(catName) {
	return sendRequest(`${BASE_URL}/category/${catName}`);
}
export function searchItems(term) {
	return sendRequest(`${BASE_URL}/search/${term}`);
}
export function getById(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}
