# To run, do:

* yarn
* yarn run dev

# Comments:

* Gulp is not used as it's redundant;
* Token is persisted in localStorage via the white-listed reducer "login" using the "redux-persist" middleware;
* Only bootstrap grid is imported, as bootstrap by itself is too bloated;
* Using Jest for Snapshot testing — I'm new to Jest and it looks awesome, but I need to read a bit more about it, as now I don't know how high up the component tree should the testing continue, as it looks like I can simply test my whole app from the root, just mocking the state tree, but this kind of testing would be a bit too bloated, so I'm a bit undecided on how deep I should dig.
* IE9 (and older) is getting special treatment by being forced to use hash-based-routing, as push-state is not supported there;
* Some basic server-side-rendering is being done, but not "all the way", as in the user session is not honored, thus a not-logged-in user is getting the login page from the back-end, but the logged-in user is not getting a rendered server list from the back-end;