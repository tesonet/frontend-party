# `tesonetApp` — Igne's implementation of the tesonet task

The tesonetApp is displaying a login page, where user can login and see a server list. Behind the scenes after a successful login an authentication token is fetched and sent in the http header for the next request.

## Getting Started

### Install Dependencies

```
npm install
```

Behind the scenes this will also call `bower install`

### Run the Application


```
grunt serve
```

Now browse to the app at [`localhost:9000`]


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> concatenated and minified custom stylesheets
  header/                --> the header view template and logic
    header.html            --> the partial template
    header.js              --> the controller logic
    header.test.js         --> tests of the controller
  login/                --> the login view template and logic
    login.html            --> the partial template
    login.js              --> the controller logic
    login.test.js         --> tests of the controller
    authentication_service.js         --> the service logic
    authentication_service.test.js    --> tests of the controller
  server_list/                --> the server_list view template and logic
    server_list.html            --> the partial template
    server_list.js              --> the controller logic
    server_list.test.js         --> tests of the controller
    server_list_service.js         --> the service logic
    server_list_service.test.js    --> tests of the service
  app_services.js         --> service module definition
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma

```


## Testing

The `tesonetApp` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have a `.test.js` suffix (e.g.
  `login.test.js`).

The easiest way to run the unit tests is to use the grunt task:

```
grunt test
```

This script will start the Karma test runner to execute the unit tests. Moreover, jshint is executed before any test is run, so that the code is validated in advance.

## Building

```
grunt build
```

This will create a /dist directory with concatenated and uglified/minified application files, copied .html files and images.
