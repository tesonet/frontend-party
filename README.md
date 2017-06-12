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
* IF u use [bootstrap css](http://getbootstrap.com/css/), u will have to prove to us your understanding of css/html
* Use a CSS pre-processor (STYL preferred).

### App
* Use a component-based framework - AngularJS / ReactJS / Vue.js/ Aurelia.io
* This app needs to be single page. Use a javascript router to achieve this
* Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):

    ```
    {"username": "tesonet", "password": "partyanimal"}
    ```

* Use ngrx to track the state
* Save the newly-created token to sessionStorage
* Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers
* Order the results by `distance` and `name`.
* Implement logout

### Miscellaneous
* Browser support must be great. All modern browsers plus IE9 and above.
* Use CLI of a framework of your choice, if not available, use a Javascript task-runner (gulp preferred) but u can surprise us with your awesome knowledge of Webpack
* Do not commit the build

## Few tips
* Structure! WE LOVE STRUCTURE!
* Maybe You have an idea how it should interact with users? Do it! Its on you!
* Have fun!
