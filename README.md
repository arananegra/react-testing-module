# React testing module



[![Build Status](https://travis-ci.org/arananegra/react-testing-module.svg?branch=master)](https://travis-ci.org/arananegra/react-testing-module)
[![CircleCI](https://circleci.com/gh/arananegra/react-testing-module/tree/master.svg?style=svg)](https://circleci.com/gh/arananegra/react-testing-module/tree/master)

## Installation
```sh
$ npm install
```



## Features of this project

- All the basic and extra examples are runnable by:
```sh
$ npm test
```

or 

```sh
$ npm run test:watch
```

## Warning:

- There is a warning related to Material UI when rendering the table component

```sh
 console.error node_modules/react-dom/cjs/react-dom.development.js:545
      Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
          in td (created by ForwardRef(TableCell))
          in ForwardRef(TableCell) (created by WithStyles(ForwardRef(TableCell)))
          in WithStyles(ForwardRef(TableCell))

```


