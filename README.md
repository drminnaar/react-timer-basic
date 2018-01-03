# React Timer Basic

A basic timer that will start a countdown based on an input of time in seconds.

The Timer provides start, stop, and rest functionality. When the timer reaches a value <= 10, the timer color changes to red.

Go **[here](http://react-timer-basic.drminnaar.me/)** for live demo.

Component Diagram
![](https://user-images.githubusercontent.com/33935506/34461426-30e5547c-ee32-11e7-8889-4fd16df7a7bb.png)

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration

**Screenshots:**

... | ...
--- | ---
![react-timer-basic-1](https://user-images.githubusercontent.com/33935506/33755966-f18607ba-dbfb-11e7-911e-5c55964419e0.PNG) | ![](https://user-images.githubusercontent.com/33935506/33755967-f1b96c36-dbfb-11e7-985b-94c4946979f5.PNG)
![](https://user-images.githubusercontent.com/33935506/33755969-f22a7962-dbfb-11e7-9d6a-22be03ee7b77.PNG) | ![](https://user-images.githubusercontent.com/33935506/33755970-f25d7326-dbfb-11e7-8ec1-c1e2cc52189d.PNG)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Surge] - Static web publishing for Front-End Developers

---

## Related Projects

* [react-starter]

  A basic template that consists of the essential elements that are required to start building a React application

* [react-clicker]

  A basic React app that allows one to increase, decrease, or reset a counter

* [react-clock-basic]

  A basic clock that displays the current date and time

* [react-timer-advanced]

   A basic countdown timer that offers an advanced UI experience

* [react-masterminds]

  A basic game of guessing a number with varying degrees of difficulty

* [react-movie-cards]

  A basic application that displays a list of movies as a list of cards

* [react-calculator-standard]

  A calculator that provides the essential arithmetic operations, an expression builder, and a complete history of all expressions

* [react-bitcoin-monitor]

  An app that monitors changes in the Bitcoin Price Index (BPI)

* [react-weather-standard]

  A weather application that displays the current weather, daily forecasts, and hourly forecasts based on your current geolocation

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-timer-basic'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-timer-basic.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-timer-basic.git
  ```

* Install node modules

   ```bash
   cd react-timer-basic
   npm install
   npm dedupe
   ```

### Build

* Build application

  This command will also run ESLint as part of build process.

  ```bash
  npm run build
  ```

* Build application and start watching for changes

  This command will also run ESLint as part of build process.

  ```bash
  npm run build:watch
  ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run the _'serve'_ npm task

  ```bash
  npm start
  ```

* Run webpack dev server

  ```bash
  npm run serve:dev
  ```

* Alternatively run live-server (simple development http server with live reload capability)

  ```bash
  npm run serve
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/react-timer-basic/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[Surge]: https://surge.sh/
[react-starter]: https://github.com/drminnaar/react-starter
[react-clicker]: https://github.com/drminnaar/react-clicker
[react-clock-basic]: https://github.com/drminnaar/react-clock-basic
[react-timer-basic]: https://github.com/drminnaar/react-timer-basic
[react-timer-advanced]: https://github.com/drminnaar/react-timer-advanced
[react-masterminds]: https://github.com/drminnaar/react-masterminds
[react-movie-cards]: https://github.com/drminnaar/react-movie-cards
[react-calculator-standard]: https://github.com/drminnaar/react-calculator-standard
[react-bitcoin-monitor]: https://github.com/drminnaar/react-bitcoin-monitor
[react-weather-standard]: https://github.com/drminnaar/react-weather-standard