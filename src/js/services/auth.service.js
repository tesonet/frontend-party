class AuthService {
    constructor($http) {
        this.endpoint = 'http://playground.tesonet.lt/v1/tokens';
        this.$http = $http;
    }
    login(user, callback) {
        this.$http({
            method: 'POST',
            url: this.endpoint,
            data: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function(e) {
                callback(e.status, e.data.token);
            }, function(e){
                callback(e.status, e.data.message);
            });
    }
}

AuthService.$inject = ['$http'];

export default AuthService;
