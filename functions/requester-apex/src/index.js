import axios from 'axios';
import λ from 'apex.js';

export default λ(e =>
  Promise.all(e.urls.map(async url => ({
    status: (await axios.get(url)).status,
    url,
  }))));
