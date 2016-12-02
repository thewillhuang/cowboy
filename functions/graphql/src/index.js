import λ from 'apex.js';
import { paramsSync, kdf } from 'scrypt';

const scryptParam = paramsSync(0.025);

const generateHash = password =>
  kdf(new Buffer(password), scryptParam)
    .then(result => result.toString('base64'));

export default λ(async (e) => {
  console.log('event', e);
  return await generateHash(JSON.stringify(e.body).password);
});
