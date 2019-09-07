# Unit Test Demo using Webpack, Karma, Mocha, Chai and Sinon

Created using --> <a href="https://gist.github.com/scssyworks/6b1d4203297f2e9dc0855c4284414f22">GitGub gist</a>.

## Installation

Clone this repository and run:
```sh
npm install
```

## Setup

1. Some sample code and tests files are already placed in ``src`` and ``test-cases`` folders respectively.<br>
2. Create a new sample code file under ``src`` and it's test file under ``test-cases``.<br>
3. The test file should end with ``.spec.js``. The test runner will otherwise ignore the JS file.<br>

## Running tests

```sh
npm run test
```

## Debugging

1. Open ``karma.conf.js`` and comment ``--headless`` in ``customLaunchers``.<br>
2. Change ``singleRun`` option to ``true``.<br>
3. Run the tests. This should open a chrome browser window.<br>
4. Click ``debug`` to open ``Karma`` debugger in new tab. Refreshing the page will re-execute the tests.<br>
5. Use ``debugger`` to put breakpoints in your code for debugging.

## Coverage

The code coverage report can be found under ``coverage`` folder.