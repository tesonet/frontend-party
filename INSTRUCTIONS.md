## INSTALLATION
1. npm install -g @angular/cli
2. git clone repo
3. npm install
4. ng serve, preview in localhost:4200

> Note: ng lint doesn't pass for async pipe in *ngIf declaration in html templates, it is a "codelyzer" bug 

### 3d party libraries we use
1. Font => https://github.com/FortAwesome/Font-Awesome
2. Custom scrollbar => https://github.com/noraesae/perfect-scrollbar/

## GLOBAL RULES

1. Class name, folder name, variable name, etc. => only singular, NO users, but userList or user-list
2. Naming convention list:
* File name, folder name, css class name => snake-case
* Variables => lowerCamelCase
* Constants => UPPERCASE_CONSTANT
* Class names => UpperCamelCase

## HTML/CSS RULES

1. We use BEM methodology + atomic design patter to structure our code
2. BEM is in strict mode, meaning only 1 level of &__ is allowed
3. Css variable name pattern from here: http://docs.emmet.io/cheat-sheet/
4. Size variable pattern used from clothes: egz.: spaceTopLg
5. Color name must be cPrimary, cSecondary so on, no cRed!
6. NO abbreviations, with 1 exception of "specs".
7. We try to write correct html, if something is a button by functionality, we don't use 'a class="button"'

## JS RULES
1. All JS rules are in lint configuration files.
