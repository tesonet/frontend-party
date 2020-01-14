# Tesonet FrontEnd developer task

Start the dev server by running:

`yarn & yarn start`

---

It was a fun and rather straightforward task to work on. Also, it's a good opportunity to brush up on my redux skills since most of the projects that I've worked on during the last 6 months(ish) used Context API + Hooks for state management. Although, I'm used to Typescript and React, the redux + typescript + thunk + hooks combination came back to bite me as I've spent a considerable amount of time wrestling with type definitions and hook testing.

I've tried to make the structure as clear as possible - decided to go with a flat component structure as the application only has 2 pages. [Relevant Twitter thread with a hot-take from Mr. React himself](https://mobile.twitter.com/dan_abramov/status/1027248875072114689)

Future improvements would definitely include a test suite overhaul because at the moment, it's _mediocre, at best_. The application would benefit greatly from proper e2e tests (such as Cypress), better unit test coverage and in-depth integration tests.

Works on all modern (and not-so-modern) browsers including IE11.
