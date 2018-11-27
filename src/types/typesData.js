export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const dataLoadSuccess = data => ({
    type: DATA_LOAD_SUCCESS,
    payload: { data }
});
export const dataLoadError = error => ({
    type: DATA_LOAD_ERROR,
    payload: { error }
});
