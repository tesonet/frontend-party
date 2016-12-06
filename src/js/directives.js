import angular from 'angular';

import loginForm from './components/loginForm/loginForm.directive';
import serversList from './components/serversList/serversList.directive';
import logoutButton from './components/logoutButton/logoutButton.directive';
import serversListFilters from './components/serversListFilters/serversListFilters.directive';

export default angular.module('app.directives', [])
	.directive('loginForm', loginForm)
	.directive('serversList', serversList)
	.directive('logoutButton', logoutButton)
	.directive('serversListFilters', serversListFilters)