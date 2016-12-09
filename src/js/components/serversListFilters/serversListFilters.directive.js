function serversListFilters() {
	return {
		restrict: 'E',
		template: require('html!./serversListFilters.html'),
		controller: ServersListFiltersController,
		controllerAs: 'filter',
		scope: {
			order: '='
		}
	}
}

class ServersListFiltersController {
	constructor($scope) {
		this.$scope = $scope;
	}

	orderBy(type) {
		let _this = this;
		if (typeof type == 'string') {
			if (type == _this.$scope.order) {
				_this.$scope.order = '-' + type;
			} else {
				_this.$scope.order = type;
			}
		}
	}
}

export default serversListFilters;