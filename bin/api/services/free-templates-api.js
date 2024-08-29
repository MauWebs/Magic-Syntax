import axios from 'axios';
import { BASE_URL } from '../routes/endpoints.js';

async function fetchData1() {
  try {
    const response = await axios.get(`${BASE_URL}posts/1`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  };
};

async function fetchData2() {
  try {
    const response = await axios.get(`${BASE_URL}posts/2`);
    return response.data;
  } catch (error) {
    console.error('Error', error);
  };
};

async function fetchData3() {
  try {
    const response = await axios.get(`${BASE_URL}posts/3`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  };
};

export { fetchData1, fetchData2, fetchData3 };