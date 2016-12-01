function serversList() {
	return {
		restrict: 'E',
		template: require('html!./serversList.html'),
		controller: 'ServersController',
		controllerAs: 'servers'
	}
}

export default serversList;