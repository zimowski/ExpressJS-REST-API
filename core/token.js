import JWT from 'jsonwebtoken';
import Config from '../app-config';

export default {
  verify: (token) => {
    return JWT.verify(
      token,
      Config.token.key,
      (error, decoded) => !error
    );
  },
  sign: (data) => {
    return JWT.sign(
      { data },
      Config.token.key,
      {
        expiresIn: Config.token.expiresIn
      }
    );
  },
  decode: (token) => {
    return JWT.verify(
      token,
      Config.token.key,
      (err, payload) => {
        if (err) return false;
        return payload;
      }
    );
  }
};
