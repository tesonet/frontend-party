import angular from 'angular';
import ngRoute from 'angular-route';
import 'ngstorage';
import '../../node_modules/angular-placeholder/lib/tai-placeholder';

import routes from './routes';

import './services';
import './controllers';
import './directives';
import './constants';

angular.module('app', [
		ngRoute,
		'ngStorage',
		'taiPlaceholder',
		'app.services',
		'app.controllers',
		'app.directives',
		'app.constants'
	])
	.config(routes);
