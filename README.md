## Client
This client demo app uses Angular. You'll want to make sure things for that are setup in your local environment. Checkout https://angular.io/guide/setup-local for how to get started.

# Project setup
Create the base client app and go into the created directory:
- `ng new client` (yes to Angular Routing, yes to SCSS)
- `cd client`

Run the application:
- `ng serve --disable-host-check`

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

## Proxy
To make the client and server look like they are coming from the same host and avoid a bunch of CORS and other related issues that will muddy a demo, we have a reverse proxy setup to send `/api/*` requests to the Express server and everything else to the Angular app.
`cd proxy`
`DEBUG=proxy:* npm start`

## Outbound connection and SSL
To get an easy, stable outbound connection that also provides SSL, check out ngrok (https://ngrok.com). Running this:
`ngrok http -subdomain=your-subdomain-if-you-have-one 8080`
will create `https://your-subdomain-if-you-have-one.ngrok.io` that sends traffic to `localhost:8080` (the proxy) that will then send things to either Express or Angular.

This is especially useful if you need to do testing with things that might include OAuth redirects, etc.

## Local setup
Getting all of those processes running is kind of a pain. Install tmuxinator (https://github.com/tmuxinator/tmuxinator) and then just run:
`tmuxinator start project your-ngrok-subdomain` 
from the project directory to have it setup and start everything for you. 

Running:
`tmux kill-session -t project` 
will kill everything it started for you.



## Presentation notes
- Setting up and integrating Firebase is out of scope.

# Firebase Auth Drop In UI
- Depends on the `@angular/fire` and `firebaseui` packages.
- Setup in `app.module.ts`
- Checkout `auth.ts`
- Checkout `login.component.html` and `login.component.ts`
- You can style it however you want (out of scope).
- If you are using Angular, you really want to use AngularFire vs this code.