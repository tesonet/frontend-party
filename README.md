#Senior frontend developer task

#Fixes

- IE11 promise issue fixed;
- Unique key added to prevent warning: Each child in an array or iterator should have a unique "key" prop;
- Organized code in more proper way;
- Not neccesary packages removed;
- Icons added next to input fields;

#Install and run 

npm i / npm start / localhost:9000

#Requirements

    V - Design must be responsive. 
    V - Use bootstrap css
    V - Use a CSS pre-processor (SCSS preferred) or CSS-in-JS library (styled-components preferred)

#App

    V - Use ReactJS
    V - This must be a single page application. Use React Router for frontend routing
    V - Implement login by sending an authorization request (POST) to 
    http://playground.tesonet.lt/v1/tokens to generate a token (don't forget to pass Content-Type):
    V - Save the newly-created token to the local storage
    V - Use the token to retrieve the server list from 
    http://playground.tesonet.lt/v1/servers , order the results by distance and name.
    V - Implement logout

#Miscellaneous

    V - Your app must work on all modern browsers and IE11+
    V - Use JS bundler (Webpack preferred)
    V - Use npm scripts or gulp for running tasks
    
    One test function is ready for now. It checks with snapshot wheather 
    Login component html structure is unchanged.

    V - Use a unit testing library (Jest preferred)
    V - Do not commit the build

#Few tips

    V - Structure! WE LOVE STRUCTURE!
    Toastr can be used for interaction (will update later) - 
    X Maybe You have an idea how it should interact with users? Do it! Its on you!
    V - I did! :) - Have fun!
