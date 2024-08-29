import axios from 'axios';
import dotenv from 'dotenv';
import { BASE_URL } from '../routes/endpoints.js';

dotenv.config();

const API_KEY = process.env.MAGIC_SYNTAX_APY_KEY;

async function fetchDataBasic1() {
  try {
    const response = await axios.get(`${BASE_URL}posts/1`,);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  };
};

async function fetchDataBasic2() {
  try {
    const response = await axios.get(`${BASE_URL}posts/2`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  };
};

async function fetchDataBasic3() {
  try {
    const response = await axios.get(`${BASE_URL}posts/3`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  };
};

export { fetchDataBasic1, fetchDataBasic2, fetchDataBasic3 };