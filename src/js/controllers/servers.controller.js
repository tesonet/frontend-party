export default class ServersController {
    constructor($localStorage, $location) {
        this.$localStorage = $localStorage;
        this.$location = $location;
        this.checkToken();
    }

    checkToken() {
        this.token = this.$localStorage['testio-token'];
        if (angular.isUndefined(this.token)) {
            this.$location.path('/');
        }
    }
}

ServersController.$inject = ['$localStorage', '$location'];
