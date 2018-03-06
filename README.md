# Senior frontend developer task

> Note: To clone this repository you will need [GIT-LFS](https://git-lfs.github.com/)

## Getting started

1. Clone this repository
2. Enter the folder: ```cd senior-frontend-party```
3. Install dependencies: ```yarn install```
4. Launch the development server: ```yarn start```
5. In your browser navigate to: ```http://localhost:3000```
6. Login using the ```tesonet : partyanimal``` credentials
7. Have fun

## Common commands

- ```yarn install``` - install all dependencies
- ```yarn cleaninstall``` - reinstall all dependencies and clean the cache
- ```yarn start``` - start a local development server
- ```yarn build``` - create a production optimized build
- ```yarn lint``` - launch a code style check using ESLint
- ```yarn test``` - launch automatic tests

## Notes on task implementation

### Design
- Uses Bootstrap 4, and a ```reactstrap``` package for easy to use components
- Design image elements are compressed to have the least size
- Design is responsive
- ```styled-components``` are used to write styles

### App
- Uses ReactJS
- Uses Redux for state management
- Uses Redux-saga to make application's side effects easier to manage and test
- It's a single page application. Uses React Router 4
- Implements a PrivateRoute
- Implements login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token
- Saves the newly-created token to the local storage
- Uses the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`
- Implements a logout

### Miscellaneous
- App works in all modern browsers and IE11+
- This app's boilerplate was generated using the ```create-react-app``` tool
- Webpack is used as a code bundler
- ESlint is configured for code style linting
- Additionally there is an .editorconfig file included, which could enforce some basic rules
- Jest is used for tests
- Npm scripts are used for running tasks
