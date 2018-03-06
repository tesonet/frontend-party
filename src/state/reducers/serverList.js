import {
  SERVER_LIST_REQUESTED,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_ERROR,
} from '../../constants/actionTypes';
import getErrorMessage from '../../utils/getErrorMessage';
import { errors as copy } from '../../assets/copy/global.json';

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

export default function serverList(state = initialState, action) {
  switch (action.type) {
    case SERVER_LIST_REQUESTED:
      return { ...state, isLoading: true, error: null };
    case SERVER_LIST_RECEIVED:
      return { ...state, isLoading: false, list: action.serverList };
    case SERVER_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: getErrorMessage({ error: action.error, fallbackMessage: copy.errorServerListRetrieve }),
      };
    default:
      return state;
  }
}
