import angular from 'angular';

import ServersController from './controllers/servers.controller.js';

export default angular.module('app.controllers', [])
    .controller('ServersController', ServersController);