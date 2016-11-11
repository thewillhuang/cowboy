import gm from 'gm';
import axios from 'axios';
import λ from 'apex.js';

console.log(gm);
export default λ(e =>
  Promise.all(e.urls.map(async (url) => {
    console.log('fetching %s', url);
    return {
      status: (await axios.get(url)).status,
      url,
    };
  })));
