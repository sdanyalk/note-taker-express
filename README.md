[![Build Status](https://travis-ci.com/sdanyalk/note-taker-express.svg?branch=master)](https://travis-ci.com/sdanyalk/note-taker-express)
[![Coverage Status](https://coveralls.io/repos/github/sdanyalk/note-taker-express/badge.svg?branch=master)](https://coveralls.io/github/sdanyalk/note-taker-express?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license)

<img src="./public/assets/img/warning.jpg" width="800" height="100">

This is the solution for homework assignment-11 of University of Arizona Coding Bootcamp. As an instructor, I have provided my solution as guidance to my students. I have licensed this code under [MIT license](license), which means that if you use any code from here, you will need to reference the copyright **exactly** as it is. Even after doing that, if you try to submit your homework using any code from here, it will be considered **plagiarism**.

---

# Note Taker Express
Note Taker application can be used to write, save, and delete notes. This application uses an `express` backend, saves and retrieves note data to/from a JSON file.

---

## Heroku Deployment

This project is deployed on Heroku. The link to web app is:

[https://note-taker-express-11.herokuapp.com/](https://note-taker-express-11.herokuapp.com/)

---

## Installation

1. Clone this repository.
    ```
    git clone https://github.com/sdanyalk/note-taker-express.git
    ```
1. Navigate into the cloned directory.
    ```
    cd note-taker-express
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. In the root directory of the project, start the app.
    ```
    node server.js
    ```
1. Run tests.
    ```
    npm run test
    ```

---

## NPM Packages

| Package | Documentation | Notes
| ----------- | ----------- | ----------- |
| `jest` | [Jest](https://jestjs.io/docs/en/getting-started) | Delightful JavaScript Testing Framework
| `supertest` | [SuperTest](https://www.npmjs.com/package/supertest) | Used in testing express routes
| `coveralls` | [Coveralls](https://www.npmjs.com/package/coveralls) | Great code coverage reporting tool
|  |  |

---

# CI/CD

CI/CD means Continuous Integration / Continous Development. This is a development practice that means deploying your code as soon as you develop it automatically.

I'm using [travis-ci](https://travis-ci.com/) for this. It is very easy to setup and use. You will need to create a file called `.travis.yml` at the root of your project. After that go to [github marketplace](https://github.com/marketplace/travis-ci) to add travis-ci to your github. It also gives nice build badges that can be added to the readme.

`travis-ci` can also be used to deploy the code to heroku automatically everytime any code is pushed to `master` branch of the github repo. Here is the documentation that I used:
https://docs.travis-ci.com/user/deployment/heroku/. You can also check my `.travis.yml` file to see how it is setup.

---

## License

This project is licensed under the MIT License - see the [LICENSE](license) file for details.