import loginForm from './components/loginForm/loginForm.directive';
import serversList from './components/serversList/serversList.directive';

export default angular.module('app.directives', [])
	.directive('loginForm', loginForm)
	.directive('serversList', serversList)

