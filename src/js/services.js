import angular from 'angular';

import AuthService from './services/auth.service';
import ServersService from './services/servers.service';

export default angular.module('app.services', [])
    .service('AuthService', AuthService)
    .service('ServersService', ServersService);

