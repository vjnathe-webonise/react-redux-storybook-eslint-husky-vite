# react-redux-storybook-eslint-husky-vite

React Redux boilerplate with husky precommit for liters and test, storybook and vite as build tool.

## Prerequisite

node LTS version to be installed **>= 18.x.x**

## Steps to run:

1. `npm install` To install the project dependency.
2. Update the proxy setting under `vite.config.js` to point to appropriate API server.
3. `npm run dev` To run application on local development server.

## Other CLI commands:

1. `npm run test` To run the test cases in watch mode.
2. `npm run coverage` To run the test case code coverage.
3. `npm run test:ui` To run the test cases and show result in browser .
4. `npm run storybook` To run the storybook.
5. `npm run lint` To run eslint rules on all source code under `src` directory.

## Features:

1. **React and ReactDOM** with version **18**. **Code splitting** using React **lazy and suspense**.
2. React router dom with version **6**.
3. Vite as dev server and build tool. Having support for **Hot reloading** and fast build using **ESbuild**.
4. **Vitest** as unit testing framework and **Coverage** tool.
5. **Bundle analyser**.
6. **Storybook**.
7. **ESLint** as linter integrated with **Airbnb** ruleset.
8. **Husky** and **lint-staged** as precommit hook to run linters and test on staged changes before pushing to GIT.
9. API proxy setup to avoid CORS issues.
