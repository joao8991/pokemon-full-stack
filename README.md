# Pokemon Full Stack

### Important Note

- Recommended v17.8.0 node version

## Getting Started

If you are starting the project on a new computer run you need to install the dependencies in both folders `server` and `frontend`. To do it run.

```bash
npm install
```

Then, in both folders run:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## To run unit tests

Move to the `server` or `frontend` folders and run:

```bash
npm run test
```

## To run Cypress tests

You will need to have the app running(both `server` and `frontend`)

When it's everything setup, move to the frontend folder and run to open the Cypress GUI:

```bash
npm run cypress
```

Now inside Cypress GUI choose the "E2E Testing" option and then "google chrome". Here you will find a list of tests, click the one you would like to run.

If you prefer to only see the result in the terminal run:

```bash
npm run cypress-no-gui
```
