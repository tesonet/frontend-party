
  
# Tesonet FrontEnd developer task  
  
## What's done  
  
1. Basic functionality  
1. Some critical e2e tests  
  
## What's next for production  
  
1. Type checking  
2. Ensure code coverage and features with tests  
3. Performance tests/measurements  
4. Pipelines and deployment  
5. Error handling  
6. SSR and CDN configure https

## Install and use

1. Install `npm i`
2. Start on local machine for development `npm start`
3. Run test `npm test` (this will run on the 3000 port so requires to be free or test might fail)

## Production build

1. Build `npm run build`
2. Serve with http server example: `serve -s build`
3. IE11 should be supported