import { decorate, observable, action } from 'mobx';
import { getHistory } from './history';

const history = getHistory();
export const DEFAULT_ROUTE = '/';

class RouteStore {
    public currentRoute: string | null;

    constructor() {
        this.currentRoute = null;
    }

    public changeRoute = (newRoute: string) => {
        this.currentRoute = newRoute;
        history.push(newRoute);
    }

    public changeRouteToDefault = () => {
        this.changeRoute(DEFAULT_ROUTE);
    }
}

decorate(RouteStore, {
    currentRoute: observable,
    changeRoute: action,

})

const routeStore = new RouteStore()
export default routeStore;
