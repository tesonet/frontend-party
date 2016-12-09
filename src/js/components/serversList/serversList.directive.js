function serversList() {
	return {
		restrict: 'E',
		template: require('html!./serversList.html'),
		controller: ServersListController,
		controllerAs: 'serversList',
		scope: {
			order: '=',
			list: '='
		}
	}
}

class ServersListController {
	constructor(config) {
		this.distanceMeasurement = config.distanceMeasurement;
	}
}

ServersListController.$inject = ['config'];

export default serversList;