import JWT from 'jsonwebtoken';
import Config from '../app-config';

export default {
  verify: (token) => {
    return JWT.verify(
      token,
      Config.token.private_key,
      (error, decoded) => !error
    );
  },
  sign: (data) => {
    return JWT.sign(
      { data },
      Config.token.private_key,
      {
        expiresIn: Config.token.expires_in
      }
    );
  },
  decode: (token) => {
    return JWT.verify(
      token,
      Config.token.private_key,
      (err, payload) => {
        if (err) return false;
        return payload;
      }
    );
  }
};
