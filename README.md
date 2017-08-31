# Senior frontend developer task

## Few simple steps

<div style="color:LimeGreen">
✔ 1. Fork this repo<br />
✔ 2. Do your best<br />
✔ 3. Prepare a pull request and let us know that you are done<br />
</div>

## Few simple requirements
### Design
<div style="color:LimeGreen">
✔ Design should be recreated as closely as possible.<br />
✔ Design must be responsive.<br />
✔ Use [bootstrap css](http://getbootstrap.com/css/)<br />
✔ Use a CSS pre-processor (SCSS preferred) or CSS-in-JS library (styled-components preferred)
</div>

### App
<div style="color:LimeGreen">
✔ Use ReactJS<br />
✔ This must be a single page application.<br />
✔ Use React Router for frontend routing<br />
✔ Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):
</div>

```
{"username": "tesonet", "password": "partyanimal"}
```

* <span style="color:LimeGreen">✔ Save the newly-created token to the local storage</span>
* <span style="color:LimeGreen">✔ Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`.</span> 
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
