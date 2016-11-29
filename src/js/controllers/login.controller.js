export default class LoginController {
    constructor(AuthService, $timeout, $localStorage) {
        this.AuthService = AuthService;
        this.$timeout = $timeout;
        this.$localStorage = $localStorage;

        this.errorMessage = 'Wrong username or password. Please try again.';
        this.error = false;
        this.user = {
            username: 'tesonet',
            password: 'partyanimal'
        }
    }
    login() {
        this.AuthService.login(this.user, (status, message) => {
            if (status == 200) {
                this.$localStorage['testio-token'] = message;
            } else {
                this.error = true;
                this.user = {};
                this.$timeout(()=> {
                    this.error = false;
                }, 3000);
            }
        });
    }
}

LoginController.$inject = ['AuthService', '$timeout', '$localStorage'];
