# Pokemon Full Stack

**Important Note**

- Recommended Node.js version: v17.8.0

## Getting Started

If you are starting the project on a new computer, follow these steps to install the dependencies in both the `server` and `frontend` folders:

1. Open your terminal and navigate to the project's root directory.
2. Run the following command to install the dependencies:

```bash
npm install
```

3. Once the dependencies are installed, run the following command in both the `server` and `frontend` folders:

```bash
npm run dev
```

4. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the result.

## Running Unit Tests

To run unit tests, navigate to the `server` or `frontend` folders in your terminal and execute the following command:

```bash
npm run test
```

## Running Cypress Tests

Before running Cypress tests, ensure that both the `server` and `frontend` are up and running.

Once everything is set up, follow these steps:

1. Move to the `frontend` folder in your terminal.
2. Run the following command to open the Cypress GUI:

```bash
npm run cypress
```

3. Inside the Cypress GUI, choose the "E2E Testing" option and select "Google Chrome". You will find a list of tests; click on the one you would like to run.

If you prefer to view the test results in the terminal instead, run the following command:

```bash
npm run cypress-no-gui
```
