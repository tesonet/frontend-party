import { observable, action } from 'mobx'

class app {
    @observable loggedIn = false;

    @observable isLoading = true;

    @action.bound
    stopLoad() {
        this.isLoading = false
    }
    @action.bound
    startLoad() {
        this.isLoading = true
    }

    @action.bound
    logIn() {
        this.loggedIn = true
    }

    @action.bound
    logOut() {
        this.loggedIn = false
        localStorage.removeItem('token')
    }
}

export default new app()