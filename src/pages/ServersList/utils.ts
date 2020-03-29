import {IServerEntry} from '../../store/reducers/serversReducer';

export const mapTableRows = (server: IServerEntry) => ({
	...server,
	key: `${server.name} ${server.distance}`,
	distance: `${server.distance} km`,
});

export const compareByDistanceAndName = (a: IServerEntry, b: IServerEntry) => {
	if (a.distance === b.distance) {
		return a.name.localeCompare(b.name);
	}
	return parseInt(a.distance, 10) - parseInt(b.distance, 10);
};