import LoginController from './controllers/login.controller.js';
import ServersController from './controllers/servers.controller.js';

export default angular.module('app.controllers', [])
    .controller('LoginController', LoginController)
    .controller('ServersController', ServersController);