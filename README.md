Notes on my attempt in application folder ^.^

# Senior frontend developer task

If you found this task it means we are looking for you!

> Note: To clone this repository you will need [GIT-LFS](https://git-lfs.github.com/)

## Few simple steps

1. Fork this repo
2. Do your best
3. Prepare a pull request and let us know that you are done

## Few simple requirements
### Design
* Design should be recreated as closely as possible.
* Design must be responsive.
* Use [bootstrap css](http://getbootstrap.com/css/)
* Use a CSS pre-processor (SCSS preferred) or CSS-in-JS library (styled-components preferred)

### App
* Use ReactJS
* This must be a single page application. Use React Router for frontend routing
* Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):

```
{"username": "tesonet", "password": "partyanimal"}
```

* Save the newly-created token to the local storage
* Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`.
* Implement logout

### Miscellaneous
* Your app must work on all modern browsers and IE11+
* Use JS bundler (Webpack preferred)
* Use npm scripts or gulp for running tasks
* Use a unit testing library (Jest preferred)
* Do not commit the build

## Few tips
* Structure! WE LOVE STRUCTURE!
* Maybe You have an idea how it should interact with users? Do it! Its on you!
* Have fun!
