import angular from 'angular';
import ngRoute from 'angular-route';
import 'ngstorage';

import routes from './routes';

import './services';
import './controllers';

angular.module('app', [ngRoute, 'ngStorage', 'app.services', 'app.controllers'])
    .config(routes);
