# Senior frontend developer task

If you found this task it means we are looking for you!

> Note: To clone this repository you will need [GIT-LFS](https://git-lfs.github.com/)

## Getting started
open terminal window in the root folder and run this command:  
`yarn install-all`  
this will install all dependencies for both server & client

to launch app simply run this command in root folder:  
`yarn start`  
this will trigger two commands, to start server & to start client, concurrently.

## Getting started
Few useful scripts:  
`yarn clean-all` or `bash clean-all.sh` - will delete all dependencies(node_modules) for both: server & client. Also it will delete yarn cache.  

`yarn reinstall` or `bash reinstall.sh` - under the hood this runs _clean-all.sh_ to delete all packages and afterwards _install-all.sh_ to install packages fro both server & client.  

## Few simple steps

1. Fork this repo - **_Did that_**
2. Do your best - **_Sure did that! :)_**
3. Prepare a pull request and let us know that you are done - **_PR is submitted_**

## Few simple requirements
### Design
* Design should be recreated as closely as possible. - **_Had no Photoshop, so I improvised: grabbed images from [here](https://github.com/bstst/senior-frontend-party/tree/master/static/img) and followed design by provided .png files and my sense(more or less followed common UI guidlines)_**
* Design must be responsive. - **_Responsive it is_**
* Use [bootstrap css](http://getbootstrap.com/css/) - **_Sorry - didn't use it. Didn't feel need for it. Having dependencies just for the sake of having them - doesn't feel like me. Plus - I am not a big fan of Bootstrap(except maybe for the grid, this one is better - at least compared to bulma.css)_**
* Use a CSS pre-processor (SCSS preferred) or CSS-in-JS library (styled-components preferred) - **_By the time I reached styling I had all my components and screens, structures, actions and event handling, so I went with SCSS._**

### App
* Use ReactJS - **_Lots of it here :)_**
* This must be a single page application. Use React Router for frontend routing - **_It sure is SPA and uses React Router_**
* Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):

```
{"username": "tesonet", "password": "partyanimal"}
```
**_Started out my task by trying out request in [insomnia](https://insomnia.rest/). No issues here. :)_**

* Save the newly-created token to the local storage - **_This is done via redux-persist that uses localStorage under the hood._**
* Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers , order the results by `distance` and `name`. - **_Also first tried out request with [insomnia](https://insomnia.rest/) and also - no issues here. :)_**
* Implement logout - **_logout is done via redux action_**

### Miscellaneous
* Your app must work on all modern browsers and IE11+ - **_Tested and surprisingly IE had just one css issue and all other was fine. Although, safari had one too. :)_**
* Use JS bundler (Webpack preferred) - **_This one is under the hood of boilerplate_**
* Use npm scripts or gulp for running tasks - **_Few npm scripts added to make life easier. :)_**
* Use a unit testing library (Jest preferred) - **_Basic render tests added_**
* Do not commit the build - **_Of course. :)_**

## Few tips
* Structure! WE LOVE STRUCTURE! - **_Who doesn't love it! :) I did my best to do it right._**
* Maybe You have an idea how it should interact with users? Do it! Its on you! - **_I added redirect to handle all requests that do not match required root path and based on token existence(persisted value) root path is either Login or Servers Screen. Also I do believe user should always have good visual feedback to interactions, so I assigned basic transition to all elements in case of unplanned transitions(it is easier to explicitly define `transition: none` on element than to handle unexpected ones). Also for better UX I added Loading indicator to let user know something is happening - though I could improve its use between screens._**
* Have fun! - **_Sure did!!! :)_**
