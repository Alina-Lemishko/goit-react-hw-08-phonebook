import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/contacts', data);
  return result;
};

export const removeContact = async id => {
  const { status } = await axios.delete(`/contacts/${id}`);
  return status;
};
