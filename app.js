import Express from 'express';
import Logger from 'morgan';
import Cors from 'cors';
import ExpressValidator from 'express-validator';

import PageNotFound from './core/pageNotFound';
import ErrorHandler from './core/errorHandler';
import Output from './core/output';
import MySQL from './core/mysql';
import Routing from './core/routing';

import Config from './app-config';
import Routes from './app-routing';

global.db = MySQL;

const app = Express();

app
  .options('*', Cors())
  .use(Cors({
    origin: Config.allow_domains,
    preflightContinue: true
  }))
  .use(Express.urlencoded({ extended: false }))
  .use(ExpressValidator())
  .use(Logger('dev'))
  .use(Express.json())
  .use(Output);

Routing(app, Routes);

app
  .use(PageNotFound)
  .use(ErrorHandler);

module.exports = app;
