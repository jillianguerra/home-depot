import sendRequest from './send-request'

const BASE_URL = '/api'

export function getDepartments() {
  return sendRequest(`${BASE_URL}/departments/`)
}
export function getCategories(depName){
  return sendRequest(`${BASE_URL}/${depName}/categories/`)
}
export function getAllCategories(){
  return sendRequest(`${BASE_URL}/categories/`)
}