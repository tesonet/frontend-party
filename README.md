# Tesonet FrontEnd developer task by Lukas Venckus

* State management with react-redux
* Styles with SCSS + CSS modules to isolate styles between components
* Unit tests with Jest + Enzyme
* TypeScript codebase + tests
* Custom webpack build
* Polyfills for IE11

Codebase is grouped to modules defined by views - `Login` and `ServerList`. All related actions, reducers, styles, etc. are grouped under the same folder, unless used in other modules as well. In such case, they're hoisted to project source directory.

Unit tests are placed relative to the code that's being tested, in `__tests__` directory.

## Scripts

* Installation - `npm i`
* Development - `npm start`
* Build - `npm run build`
* Hosting production build - `npm run host:prod`
