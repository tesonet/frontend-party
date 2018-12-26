import {
  CLEAR_SERVERS,
  RECEIVE_SERVERS,
  REJECT_SERVERS,
  REQUEST_SERVERS,
  SORT_SERVERS
} from 'app/utils/constants';

export function requestServers() {
  return {
    type: REQUEST_SERVERS,
    loading: true
  };
}

export function receiveServers(data) {
  return {
    type: RECEIVE_SERVERS,
    loading: false,
    data
  };
}

export function rejectServers(err) {
  return {
    type: REJECT_SERVERS,
    loading: false
  };
}

export function sortServers(data) {
  return {
    type: SORT_SERVERS,
    data
  };
}

export function clearServers() {
  return {
    type: CLEAR_SERVERS,
    data: []
  };
}
