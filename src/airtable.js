import axios from 'axios';

const AIRTABLE_PAT = "patJXO5eOsvC3xUWO.ba8ea8be35addac34abdcaf2e44ec0f1495a341ee8c86cdccf971c7e6dc0630d";
const AIRTABLE_BASE_ID = "appsUTw0HGd8MOgbm";
const TABLE_NAME = 'Products'; 

const airtableAPI = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_PAT}`,
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await airtableAPI.get('');
    return response.data.records.map(record => ({
      id: record.id,
      ...record.fields,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};