# Senior frontend developer task

All things took ~15hrs to code.  
Build on top of create-react project, since I found it most quick way to bootstrap React app.

Used:  
* React-router for routing
* Redux for state management w/ redux-thunk
* [Redux-form](http://redux-form.com/7.0.3/) for quick way to bind forms w/ Redux
* Fetch API with  [IE polyfill](https://www.npmjs.com/package/whatwg-fetch)
* [Reactstrap](https://reactstrap.github.io) for Bootstrap 4 components
* Sass / SVG components / flexbox layout
* My head and few hands

## Getting started
1. `npm install`
1. `npm start`

----
## Few simple steps

* ✔ 1. Fork this repo
* ✔ 2. Do your best
* ✔ 3. Prepare a pull request and let us know that you are done

## Few simple requirements
### Design
* ✔ Design should be recreated as closely as possible.
* ✔ Design must be responsive.
* ✔ Use [bootstrap css](http://getbootstrap.com/css/)
* ✔ Use a CSS pre-processor (SCSS preferred) or CSS-in-JS library (styled-components preferred)

### App
* ✔ Use ReactJS
* ✔ This must be a single page application.
* ✔ Use React Router for frontend routing
* ✔ Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):

```
{"username": "tesonet", "password": "partyanimal"}
```

* ✔ Save the newly-created token to the local storage
* ✔ Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`
* ✔ Implement logout

### Miscellaneous
* Your app must work on all modern browsers and IE11+  
*! For the moment, I don't have Windows to check IE/Edge so might be some issues.
But I believe shouldnt =)*

* ✔ Use JS bundler (Webpack preferred)
* ✔ Use npm scripts or gulp for running tasks

* Use a unit testing library (Jest preferred)  
*! Mostly did nothing here. It's weak part in my knowledge*
* Do not commit the build

## Few tips
* Structure! WE LOVE STRUCTURE!
* Maybe You have an idea how it should interact with users? Do it! Its on you!
* Have fun!
