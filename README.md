## Client
This client demo app uses Angular. You'll want to make sure things for that are setup in your local environment. Checkout https://angular.io/guide/setup-local for how to get started.

# Project setup
Create the base client app and go into the created directory:
- `ng new client` (yes to Angular Routing, yes to SCSS)
- `cd client`

Run the application:
- `ng serve --open`


## Server
This server demo app uses Express. Checkout https://expressjs.com/en/starter/installing.html for how to get started.

# Project setup
This project was created using the Express Generator. Checkout https://expressjs.com/en/starter/generator.html for details.

Create the base server app and go into the created directory:
- `express --no-view server`
- `cd server`

Install dependencies:
- `npm install`

Run the local server (default port is 3000):
- `DEBUG=server:* npm start`