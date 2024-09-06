import axios from 'axios';
import { ENDPOINT_COMPONENTS } from '../routes/endpoints.js';

process.loadEnvFile();

const APY_KEY = process.env.MAGIC_SYNTAX_APY_KEY;

if (!APY_KEY) {
  throw new Error('La variable de entorno MAGIC_SYNTAX_APY_KEY no está configurada.');
};

async function fetchDataBasic() {
  try {
    const response = await axios.get(ENDPOINT_COMPONENTS, {
      headers: {
        'Authorization': `Bearer ${APY_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export { fetchDataBasic };