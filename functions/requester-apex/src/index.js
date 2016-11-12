import axios from 'axios';
import λ from 'apex.js';
import { paramsSync, kdf, verifyKdf } from 'scrypt';

const scryptParam = paramsSync(0.025);

const generateHash = password =>
  kdf(Buffer.from(password), scryptParam)
    .then(result => result.toString('base64'))
    .catch(e => console.log(e));

// returns true or false given password and stored hash
const validatePassword = (password, hash) =>
  verifyKdf(Buffer.from(hash, 'base64'), Buffer.from(password))
    .catch(e => console.log(e));

export default λ(e =>
  Promise.all(e.urls.map(async url => ({
    status: await generateHash(url),
    url,
  }))));
