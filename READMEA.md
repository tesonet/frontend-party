Hi,

I had a nice time implementing this task: found awesome challenges and learned new things. For sure, this is not an ideal app, just working model.

In this document, you can find more detailed description on how it went, what I did, how prioritized stuff, what I would do next.

You can just skip reading and jump to code by launching an app - check TLDR; section for this.

## TLDR;

In case you have unix-like terminal with git and npm pre-installed:

```bash
git clone https://github.com/K6zG4IM4U0/frontend-party.git && cd frontend-party && npm i && npm start

```

To run unit tests:

```bash
npm test
```

To run integration test:

```
npm run test:integration
```
Note: integration tests run on headless browser and real backend. Make sure everything is available :)

## How in went

### Constraints

First of all, I had super strict time constraint for this task - one weekend. In reality, spent more or less all Saturday and half of Sunday (Coding task activities were shared with https://www.facebook.com/events/327707941396438/ ), For more info, check commit history: https://github.com/K6zG4IM4U0/frontend-party/commits/master

### Priorities

Tried to prioritize user facing features first (login, servers list, order servers, logout), then add some user experience thingies, of course while keeping in mind technical requirements (React, Redux, React Router, ES6, etc). And then, iterate over these while adding additional features, like form validation, making things nicer from UX, code, architecture, test coverage, etc.

### Challenges

#### Design

Had quite a hard time trying to find a proper way to launch design. Was unable to import sketch file into Zeplin, a tool I use at work. Not sure if it's due to lack of my experience, or fact that Zeplin was unstable on Saturday, as it was upgrading it's web application. Next thing I checked was Avocode, which seemed to be as limited clone of Zeplin. It was quite hard to measure some distances, grab settings, like rounded corners, export images, so guessed quite a lot :)

#### Tech things

Never worked with Redux, React router and Hooks, so, not sure if my solution is perfect, it's just some quick interpretation of what I learned by reading blog posts :)

#### Things to do next / in other way

- I would use TypeScript instead of ES6.
- Code needs more structure, probably, it makes sense to extract state and data fetch from Login component.
- Part which fetches data from server, might be abstracted and reused in Login and ServerList controllers.
- Layout could be better.
- More hierarchical representative HTML elements should be used.
- It makes sense to add more tests for React components, React Hooks, Visual tests (eyes.applitools), Integration tests with mocked data and not happy path.
- There are so many small and bigger design leftovers, like fonts, spacings, etc.
- It would make sense to use more smaller dumb and easy to test React components.
- CSS is not well structured and scoped, it would make sense to use SCCS or similar tool to define some constants, hierarchies and components.
- Many places, where error handling could be improved, like in login flow, fetch serverList flow, etc.
- Need more testing on different browsers and devices.
- Not sure, if fancy ES6 things I used, like `fetch`, `finally` block in `catch` works on all targeted browsers.
- And much, much more :)