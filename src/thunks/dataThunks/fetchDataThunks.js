import axios from "axios";
import {
  onServerListFetch,
  onServerListFetchError,
  onServerListFetchSuccess
} from "../../actions/fetchDataAction/fetchServerList";
import { SERVER_URL } from "../../constants/api";

export const onServerListDataFetch = () => dispatch => {
    dispatch(onServerListFetch());

    // alert("fetching bitchezzz");
}