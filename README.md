# Tesonet FrontEnd developer task

## Basic instructions

1. Fork this repo
1. Grab design files from [here](https://www.dropbox.com/sh/ql709t4h1ksl8jn/AACaARTQ9wUkpRNj07w2uHRka?dl=0).  
   If you don't have Sketch or Photoshop, there are always free options to preview design:
   - [Avocode](https://avocode.com/) - just import `.sketch` file
   - [Zeplin](https://zeplin.io/) - just import `.sketch` file
   - [Figma](https://www.figma.com/) - just import `.sketch` file
1. Do your best with the task 💪
1. Prepare a pull request and let us know that you are done (feel free to add comment a about the task)

## Requirements

### Design

- Design should be recreated as per provided design file. We aren't talking about pixel perfect, we know there are gazillion screen sizes these days, just follow best UI/UX patterns, don't invent new icons, colors or spacing and you're all good! 👍
- Design must be mobile-firendly and responsive.
- Use `SVG`'s where possible
- For `CSS` you can use whatever you need and feel comfortable with (vanilla `CSS` is an option too), but we strongly recommend these:
  - pre-processor ([`SCSS`](https://sass-lang.com/))
  - [`CSS-in-JS`](https://reactjs.org/docs/faq-styling.html#what-is-css-in-js) library ([`styled-components`](https://www.styled-components.com/), [`JSS`](https://cssinjs.org/), [`emotion`](https://github.com/emotion-js/emotion), [`aphrodite`](https://github.com/Khan/aphrodite))
  - [`BEM`](http://getbem.com/introduction/) methodology

### App

- Use ES6+ features where applicable
- Use [`react.js`](https://reactjs.org/)
- Use state management solution ([`redux`](https://redux.js.org/) preferably). We know it is possible to do without, but we are curious - can you do with?
- This must be a single page application. Use routing library([`react-router-dom`](https://www.npmjs.com/package/react-router-dom) or [`@reach/router`](https://reach.tech/router))
- Implement login by sending an authorization request (`POST`) to http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass `Content-Type`):

```json
{ "username": "tesonet", "password": "partyanimal" }
```

- Use browser storage solution to persist token between sessions
- Use the token to retrieve the server list from http://playground.tesonet.lt/v1/servers,
- Order the results of servers list by `distance` and `name`.
- Implement logout (don't forget about the token in the storage)
- Your app must work on all modern browsers and IE11+ 🐢🤷

### Bonus

- It is all good to use [`create-react-app`](https://github.com/facebook/create-react-app) as a starter, but if you have time and want showcase your skill - use JS bundler ([`Webpack`](https://webpack.js.org/) preferred) 📦📦📦
- We highly recommend following `TDD` patterns and showcasing your skills at writing tests(`unit`, `integration`, `e2e` - all are good)
- Use [`npm scripts`](https://docs.npmjs.com/misc/scripts) for running tasks, i.e. for development, clening build or etc.
- Do validation of login fields and provide user friendly error messages if needed **#UXmatters**
- Indicate loading state for the user whenever requests are in action and user might not understand they needs to wait

## Few tips

- Imagine this as a production level product at scale 😉
- Structure! With great structure, comes great reusability!
- Maybe You have an idea that is not in the task? Do it! It's on you!
- Have fun! 🎉🎉🎉
