# Laundr-e-commerce

###### Using UF Web Apps MERN-Template!

## Getting Started

This repository aims to assist you in beginning work on a MERN stack application
with a solid file structure as a foundation. To get started make a copy of this
template repo for your project teams.

Since this project will hold both the client application and the server
application there will be node modules in two different places. First run
`npm install` from the root. After this you will run
`npm run-script install-all` from the root. From now on run this command anytime
you want to install all modules again. This is a script we have defined in
package.json .

This app can be deployed directly to heroku since there is a script defined in
package.json which will automatically handle building and deploying the app. For
more information on deploying to heroku reference the extra resources at the
bottom of this file.

Additionally, you'll need to edit the configExample.js file. Rename it to
config.js, and then include our MongoDB Atlas uri.

## if it doesn't work after running install scripts:

-   terminal output should include instructions, run inside client folder
    -   delete package-lock.json (NOT package.json)
    -   delete node_modules
    -   says to remove jest from package.json dependencies, but i don't see it
    -   run `npm install` again
-   if it still doesn't work, do it a few more times, it's super tedious but
    eventually it worked for me.

## Changes in File Strucutre that Lina Made:

### CSS -> SCSS

-   Instead of CSS I thought SCSS ("Sass: Syntactically Awesome Style Sheets")
    would be a nice alternative. It's basically the same thing as CSS using the
    same syntax and everything except it's more convenient for styling nested
    elements/classes/IDs.
-   It's a personal preference, I'm personally glad I learned enough of it.

#### Example:

-   let's say you have a div with a class of .home, and you have another div
    inside of that called .thing. you want to style specifically the .thing divs
    inside of .home divs.
-   css styling of that looks like:
    `.home { attribute: value; } .home .thing { attribute: value; }`
-   but scss styling would look like:
    `.home { attribute: value; .thing { attribute: value; }}`
-   with just two classes to deal with it doesn't seem like a very big
    difference but it'll just be more convenient if we end up with many nested
    html elements with different classes.

## File structure

#### `client` - Holds the client application

-   #### `public` - This holds all of our static files
-   #### `src`
    -   #### `assets` - This folder holds assets such as images, docs, and fonts
    -   #### `components` - This folder holds all of the different components that will make up our views
    -   #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    -   #### `App.js` - This is what renders all of our browser routes and different views
    -   #### `index.js` - This is what renders the react app by rendering App.js, should not change
-   #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

-   #### `config` - This holds our configuration files, like mongoDB uri
-   #### `controllers` - These hold all of the callback functions that each route will call
-   #### `models` - This holds all of our data models
-   #### `routes` - This holds all of our HTTP to URL path associations for each unique url
-   #### `tests` - This holds all of our server tests that we have defined
-   #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!

## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view the client in the
browser.

### `npm run-script client`

Runs just the client app in development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view the client in the
browser.

### `npm run-script server`

Runs just the server in development mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles
React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the
heroku-postbuild script<br>

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Deployment Difficulties:
- Currently deployed on https://laundr-bombs.web.app/home, via Google Firebase Hosting. 
- The desired intention was to deploy through Heroku at https://laundr-bombs.herokuapp.com/. Although we were able to correctly connect our Github repository to Heroku, in an attempt to deploy it by means of deploying the master branch from the Heroku interface, and to correctly create an optimized build for production. Because of these issues which we continue to investigate, we made the decision to have a tentative soft deployment of our client side via Firebase.
- Stripe API implementation still pocesses some issues. Customers will not get notficiations for results of payments after they submit payments. Alternative methods to bypass payment issue is sending payment information directly to Laundr, and they will be able to handle any payments.
