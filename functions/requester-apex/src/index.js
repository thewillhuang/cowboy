import λ from 'apex.js';
import { paramsSync, kdf, verifyKdf } from 'scrypt';

const scryptParam = paramsSync(0.025);

const generateHash = password =>
  kdf(new Buffer(password), scryptParam)
    .then(result => result.toString('base64'))
    .catch(e => console.log(e));

// returns true or false given password and stored hash
const validatePassword = (password, hash) =>
  verifyKdf(new Buffer(hash, 'base64'), new Buffer(password))
    .catch(e => console.log(e));

export default λ(async (e) => {
  console.log('event', e);
  return await generateHash(e.password);
});
