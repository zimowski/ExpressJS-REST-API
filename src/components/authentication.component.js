import Express from 'express';
import ValidateRequestParametersMiddleware from '../../core/validateRequestParameters';
import UserService from '../services/user.service';
import Token from '../../core/token';
import BCrypt from 'bcrypt-nodejs';
import { body } from 'express-validator/check';

const Router = Express.Router();

Router.post('/', [
  body('username').isString(),
  body('password').isString()
], ValidateRequestParametersMiddleware, (req, res, next) => {
  UserService.getUserByUsername(req.body.username, (result) => {
    if (
      result
      && result.username === req.body.username
      && BCrypt.compareSync(req.body.password, result.password)
    ) {
      delete result.password;

      res.Output(200, {
        token: Token.sign(result)
      });
    } else {
      res.Output(400, null, 'Invalid credentials');
    }
  }, (error) => {
    res.Output(400, null, 'Invalid credentials');
  });
});

export default Router;
