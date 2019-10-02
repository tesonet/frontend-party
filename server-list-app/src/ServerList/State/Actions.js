import ServerListAPI from "../../Utils/ServerListAPI"

export class ServerListActionTypes {
    static LOADING_IN_PROGRESS = Symbol("LOADING_IN_PROGRESS");
    static LOADING_FINISHED = Symbol("LOADING_FINISHED");
}

export class ServerListActions {

    static setLoadingInProgress() {
        return {
            type: ServerListActionTypes.LOADING_IN_PROGRESS,
            isLoading: true
        };
    }

    static setLoadingFinished(value) {
        return {
            type: ServerListActionTypes.LOADING_FINISHED,
            isLoading: false,
            serverList: value
        };
    }

    static retrieveServerList() {
        return (dispatch) => {
            dispatch(ServerListActions.setLoadingInProgress());
            return ServerListAPI.retrieveServerList().then(serverList => {
                dispatch(ServerListActions.setLoadingFinished(serverList));
            });

        }
    }
}

export default ServerListActions;