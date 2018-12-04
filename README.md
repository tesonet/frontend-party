# Senior frontend developer task


## Overall

### Could you fill in PR description or Readme with your thoughts on the task:

* What and how everything is done?
webpack - module bundler
redux - state container
styling – bootstrap 4, sass
react-router-dom - navigation
images - Gimp/squoosh
axios - http calls
localStorage - save token and other data
react bootstrap 4 components – reactstrap
service worker - offline functionality/caching

* What you would do maybe differently or what were the challenges?
Everything was a big challenge, because React/Redux/Jest was very new for me.
I would improve design, make testing of the whole app.

* How to test/dev launch/production build the app and etc.
Unfortunately, I still do not have experience in testing. Currently I am still learning it.

### Change requests:

* Test are throwing error and warnings
Fixed

### Questions:

* Why one commit?
I started to develop on my work's environment, only later switched to my git account.

* Your app have snapshot test which is nice, because components change rapidly, but what about other functionality?
I do not have experience in testing functionality. I am learning this as well.
 

##Login page

### Bonus Points

* [ux] Loader nice touch
* [ux] Error message

### Questions:

* LoginForm is one big file what is the reason? How could we improve readability and reusability?
I scaled it a little bit, added “form” components.

### Notes

* [ux] Prod version build login page styles aren't working as expected.
* [ux] Input fields and button different size then mocks
* [ux] Image shouldn't repeat
* [ux] On small screen, for example Iphone 5/SE, it is really hard to use the form.
* [ux] Wrong submit button hover state color
* [js] Unused imports
* [js] typesData.js contains actions which are never used
* [js] dev build bundle size for this small app is almost 3MB, prod is 620KB which is big. 
Fixed.


## Main page

### Questions:

* [js] When server returns bad response app crash, how this could be fixed?
Now I added service worker for the better offline experience (all static files now are cached). List data stored to localStorage. When/if app goes offline app still can operate with last saved data.  

* [js] What is the reason for sortBy method inside HomePage class? Maybe this could moved to separate file to be reusable?
Yes that's right. SortBy method should by in Sort class. Because every class should have responsibility for a single part of the functionality (SRP). Moved  sortBy  functionality to Sort class. 

### Bonus Points

* Implemented sorting

### Notes

* [js] What is the reason setTableHeight? Is there another way to get same result?
Now CSS sets table height because it’s more efficient.

* [js] What is the benefit have renderProducts inside HomePage class? 
Because of better code reading and reusability.
