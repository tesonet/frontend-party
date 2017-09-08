1. Clone this repository
2. Run yarn install
3. Run yarn start and have fun :)

* Used create-react-app boilerplate, which includes Webpack and Jest.
* I used redux form for the login, which appeared rather complex at first, but is a great tool, especially for more complex forms.
* Post login data and fetch servers using the token are implemented with axios and redux-promise-middleware.
* The token is saved in local storage using redux-persist, which persists the whole state so that the user stays signed-in after page refresh and helps with redirection logic if user tries typing something into the url for some reason.
* Re the routes I used only two paths: default ('/') renders either login or servers page depending if the user is authenticated or not; any other path (' * ') renders page not found component.
* I test components, reducers and route functioning in their respective folders with Jest and enzyme.
* I also added the icons for logout button and inputs as inline svg classes. This is not the prettiest thing in the world regarding code aesthetics, but it allows to modify their colour on hover.
(P.S. the app wasn't working on IE11 on Windows 7, only blank screen would show up. Took some time to figure out it was the boilderplate's fault)
