import axios from 'axios';
const { v4: UUIDV4 } = require('uuid');

export const axiosInstance = async (endpoint, data = {}, method = 'GET') => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user ? user.token : '';
  const storageFile = localStorage.getItem('file');
  let contentType = 'application/json';
  let formData = data;

  if (storageFile) {
    contentType = 'multipart/form-data';
    formData = new FormData();
    for (const key in data) { formData.append(key, data[key]); }
    const file = await (await fetch(storageFile)).blob();
    formData.append('file', file, `${UUIDV4()}.jpeg`);
  }

  const response = await axios({
    method,
    url: `${endpoint}`,
    data: formData,
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': contentType
    }
  });

  if (response.status >= 400) {
    throw new Error(response);
  }

  localStorage.removeItem('file');
  return response.data;
};
