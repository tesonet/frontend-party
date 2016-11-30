class AuthService {
    constructor($http, $localStorage, $location) {
        this.$location = $location;
        this.$localStorage = $localStorage;
        this.endpoint = 'http://playground.tesonet.lt/v1/tokens';
        this.$http = $http;
    }

    login(user, callback) {
        let _this = this;
        this.$http({
            method: 'POST',
            url: this.endpoint,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (e) {
                _this.$location.path('/servers');
                _this.$localStorage['testio-token'] = e.data.token;
            }, function (e) {
                callback(e.status, e.data.message);
            });
    }
}

AuthService.$inject = ['$http', '$localStorage', '$location'];

export default AuthService;
