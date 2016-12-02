import λ from 'apex.js';
import { paramsSync, kdf } from 'scrypt';

const scryptParam = paramsSync(0.025);

const generateHash = password =>
  kdf(new Buffer(password), scryptParam)
    .then(result => result.toString('base64'));

export default λ(async (e) => {
  const { body } = e;
  const { password } = JSON.parse(body);
  console.log('body', body, 'password', password);
  return await generateHash(password);
});
