import Express from 'express';
import Routing from '../core/routing';
import Routes from './app.routing.module';

const Router = Express.Router();

export default Routing(Router, Routes);
