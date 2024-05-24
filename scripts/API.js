const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://taobao-api.p.rapidapi.com/api',
  params: {
    num_iid: '681298346857',
    api: 'item_sku'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}