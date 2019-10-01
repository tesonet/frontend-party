# Tesonet FrontEnd developer task

## Basic instructions

1. Clone this repository
2. Change directory to `testio`
3. run `yarn start`
4. Use `yarn lint` for linting.
5. `yarn clean` to delete build and node_modules and install them again.
6. TODO: Add Husky pre commit hooks for real project. 

## Comments

Application was created using CRA, TypeScript and MobX.
Event though it was asked to show off the skills of webpack
and make it 'enterprisey' I could not resist to try and push CRA boundaries
without ejecting it so I know what I can and cannot do in future personal projects. Unfortunatelly I had to downgrade to MobX version 4 due to the fact that I cant not use decorators (which is cleaner) without ejecting. This lead me to quite some public methods and properties just to decorate them, which is not nice.

I have intentionally chosen not to go BEM way since I have used CSS modules with SCSS syntax. This means that every component will have its own style definition module. BEM in itself is not bad. It's just a different, quite viable option.

I did not implement the sorting, unfortunatelly, again - time, so I just sorted them by name upon fetching.

## Production

I have also tinkered a bit with Netlify. There is a 'production version' continously deployed to (testio.netlify.com) when something is pushed to this repository. But you guys have to use HTTPS instead of HTTP for requests.

## Feedback about the task

* Nicest one so far. It realy tests the 'real' abilities on the field, instead of throwing a bunch of algorithms, fibonachi etc.
* Missed the sorting icons of some kind for server table headers - so for the ones that actually implement it - it would be a nice to have.
* Requests over HTTPS so it would be possible to use the app hosted in Netlify or Surge
