# An API for handling Employees

## Install and run development

```
npm install
npm run dev
```

Run `npm run build` to make documentation work at `http://localhost:PORT/api-docs`

## Build and run compilation:

For production, set `.env` variable:
`NODE_ENV="production"`

```
npm run build
npm start
```

## Features

- Add a new employee (POST `/employees`)
- Remove an employee (DELETE `/employees/:id`)
- Fetch all employees (GET `/employees`)

## Docs with Swagger

`http://localhost:PORT/api-docs`

## Tests

- Unit tests for controllers and services using Jest
- Integration tests for API endpoints using Supertest

Run tests with:

`npm run test`

## Notes

- No auth in this code, which is needed otherwise (access is Public)
- In folder `/data` we have fake data and fake db-functions
- The app listens on port3005 if you don't set a PORT=\*\*\*\* in `.env`
