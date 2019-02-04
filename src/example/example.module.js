import Express from 'express';
import Routing from '../../core/routing';
import Routes from './example-routing.module.js';

const Router = Express.Router();

export default Routing(Router, Routes);
