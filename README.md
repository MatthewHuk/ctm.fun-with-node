# Overview

Part 1. Write a new endpoint that checks a string for a palindrome and returns the following:

| Status Code | Value | Description                   |
| ----------- | ----- | :---------------------------- |
| 200         | true  | If string is a palindrome     |
| 400         | false | If string is not a palindrome |

  [Here](https://examples.yourdictionary.com/palindrome-examples.html) is a list of palindromes to assist.

---

Part 2. Consider the following list of meerkat users:

```javascript
const meerkats=[
    {name: "Aleksandr", age: 30},
    {name: "Sergei", age:77},
    {name: "Maiya", age: 25},
    {name: "Oleg", age: 5}
];
```
 - Add a new Meerkat to the following list of meerkat users.
 
 - Remove from the list any meerkat who is under the age of 10.

 - Arrange the list of meerkets by age lowest to highest.

## Running the app

```bash
npm install
npm start
```

## Running the tests

Follow the steps in [Running the app](#running-the-app) to get the app running, then in a seperate terminal run:

```bash
npm test
```

## Running the tests in "watch mode"

This will run the tests and app in watch mode, so any changes re-run all tests automatically

```bash
npm run test-watch
```
