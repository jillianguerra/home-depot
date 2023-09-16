import * as usersAPI  from './users-api';

export async function makeGuest(userData) {
  const token = await usersAPI.makeGuest(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function signUp2(userData) {
  const token = await usersAPI.signUp2(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  try {
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
} catch (error) {
  console.log('Error decoding token:', error);
  return null;
  }
}

export async function updateUser(updatedUserData) {
  const token = getToken();

  if (token) {
    try {
      await usersAPI.updateUser(updatedUserData);
      return getUser();
    } catch (error) {
      throw new Error(`An error occurred while updating the user: ${error.message}`);
    }
  } else {
    throw new Error('User not authenticated.');
  }
}

export function logOut() {
  localStorage.clear();
}

export async function deleteUser() {
  const token = getToken();

  if (token) {
    try {
      await usersAPI.deleteUser();
      logOut(); 
    } catch (error) {
      throw new Error(`An error occurred while deleting the user: ${error.message}`);
    }
  } else {
    throw new Error('User not authenticated.');
  }
}