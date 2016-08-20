# cumulocity-smart-apps-webpack

[![version](https://img.shields.io/npm/v/cumulocity-smart-apps-webpack.svg)](https://www.npmjs.com/package/cumulocity-smart-apps-webpack)
[![downloads](https://img.shields.io/npm/dt/cumulocity-smart-apps-webpack.svg)](http://npm-stat.com/charts.html?package=cumulocity-smart-apps-webpack)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/dwiyatci/cumulocity-smart-apps-webpack/master/LICENSE.txt)

A boilerplate to conveniently start creating Cumulocity smart app and to improve development experience with webpack 2.x.

## ATTENTION: Cumulocity Smart Apps Toolkit is currently in legacy mode as it is based on the old release of UI core JS API (6.3.x). That said, you may still use it and it's up to you to decide whether it works and still well-suited for your particular app.
 
### Why?
I would like to enhance [the current boilerplate](https://bitbucket.org/m2m/cumulocity-examples/src/fa8077ade64ddb74100296742e739daa258ae9b3/hello-core-api/?at=default) for creating a smart app in order to be able to:
- have a cleaner development boilerplate which highly respects some awesome style guides ([John Papa's Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md), [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)).
- leverage package managing and bundling process by getting rid of Bower* and Grunt in favour of npm and webpack.
- showcase the usage of ES6+ in my code in conjunction with AngularJS.
- use npm (scripts) as a build tool.
- improve developer experience with Hot Module Replacement (HMR) capability of webpack-dev-server 2.x.
- stop repeating the hustle of creating a fiddle of Cumulocity smart app when I'm doing support for the guys who are still using the toolkit (yes, **you**! :yum:).

*Unfortunately there are some package dependencies which are only available in Bower, including [the toolkit](https://bower.io/search/?q=cumulocity-clients-javascript) itself. So, I cannot migrate 'em all completely to npm. :disappointed:

## Usage
- Install Node.js and npm from its [website](https://nodejs.org), or even better: use [nvm](https://github.com/creationix/nvm).

- Checkout the repo, `cd` to project directory, and setup dependencies:
```bash
$ npm run install:clean
```

* For development, start webpack development server with hot reloading capability:
```bash
$ npm start
```
You'll find the Cumulocity smart app running on http://localhost:8080/.

* For production, build frontend static assets:
```bash
$ npm run build
```
Simply drop all files under `dist` directory to your production server.

## Author
Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License
MIT.

See [LICENSE.txt](LICENSE.txt).
