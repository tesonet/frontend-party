# Lead frontend developer task

If you found this task it means we are looking for you!

> Note: To clone this repository you will need [GIT-LFS](https://git-lfs.github.com/)

## Few simple steps

1. Fork this repo
2. Do your best
3. Prepare pull request and let us know that you are done

## Few simple requirements
### Design
* Design should be recreated as closely as possible.
* Design must be responsive. 
* Use `container` for the login page
* Use `container-fluid` for the server list page
* Use [bootstrap css](http://getbootstrap.com/css/)
* Use CSS pre-processor (SCSS preferred).

### App
* Use a component-based framework - AngularJS / ReactJS / Vue.js
* This app needs to be single page. Use a javascript router to achieve this
* Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate token with body (don't forget Content-Type):

```
{"username": "tesonet", "password": "partyanimal"}
```

* Save the created token to local storage
* Use the newly-created token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order by `distance` and `name`.

* Browser support must be great. All modern browsers plus IE9 and above.
* Use a Javascript task-runner. Gulp or Grunt - it doesn't matter.
* Do not commit the build, because we are building things on deployment.
* Implement logout

## Few tips

* Structure! WE LOVE STRUCTURE!
* Maybe You have an idea how it should interact with users? Do it! Its on you!
* Have fun!
