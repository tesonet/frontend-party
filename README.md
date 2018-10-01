# Running

Run the following commands to start a development server:
```shell
npm install
npx webpack-dev-server
```
`npm` will complain about missing peer dependencies for Bootstrap.
This application doesn't use any of the JavaScript shipped with Bootstrap, so that shouldn't be an issue.

# Building

Run the following commands to compile the application into a Webpack bundle:
```shell
npm install
npx webpack
```
The bundle will be saved in `dist/`.

# Additional features

I added a couple additional features to the application:
- The server table can be refreshed by clicking the "Refresh" button.
- The server table can be sorted by clicking on the headers.

# Code style

I did my best to follow the following style guides:
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

# Testing

The application was tested on the following browsers:
- Chrome for GNU/Linux.
- Firefox for GNU/Linux.
- Chrome for Android.
- Firefox for Android.

I was unable to test it on IE11, as I don't have a Windows machine.

Due to a shortage of time I was unable to write any unit tests.

# Other remarks

Since this application is rather simple, I decided not to use Redux.
You did not mention Redux in the [requirements](task.md#few-simple-requirements), so I assume this is allowed.

Also, this repository doesn't actually seem to be using Git LFS.
