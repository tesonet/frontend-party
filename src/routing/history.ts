import { History, createBrowserHistory } from 'history';

let _history: History<any> | null = null;

export function getHistory() {
	if (_history === null) {
		_history = createBrowserHistory();
	}
	return _history;
}
