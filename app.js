import Express from 'express';
import Logger from 'morgan';
import Cors from 'cors';
import Path from 'path';
import ExpressValidator from 'express-validator';
import PageNotFound from './core/pageNotFound';
import ErrorHandler from './core/errorHandler';
import Output from './core/output';
import MySQL from './core/mysql';
import Config from './app.config';
import Routing from './core/routing';

import Source from './src/app.js';

if (Config.db.mysql.enabled) {
  global.db = MySQL;
}

const app = Express();

if (Config.general.cors.enabled) {
  app.options('*', Cors());
  app.use(Cors({
    origin: Config.general.cors.domains,
    preflightContinue: Config.general.cors.preflightContinue
  }));
}

app.use(Express.urlencoded({ extended: false }));
app.use(ExpressValidator());
app.use(Logger('dev'));
app.use(Express.json());
app.use(Output);

if (Config.general.public_path) {
  app.use(Express.static(Config.general.public_path));
}

const Routes = [
  { path: '/', component: Source, middlewares: [] }
]

Routing(app, Routes);

app.use(PageNotFound);
app.use(ErrorHandler);

module.exports = app;
