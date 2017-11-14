# simple_auth

A simple app with login/signin features.

## Installation
Before installing all the dependencies, please install

```
npm install -g json-server
```
For this app, since I don't have any backend server and DB, I'm running a local JSON server, to be able to save new users, control the current logged user, and also displaying some random dataset for him.

For this particular project I'm using create-react-app(https://github.com/facebookincubator/create-react-app). It has a really good configuration (Webpack and Babel are already  injected) and doesn't require a Node server.


Then, in terminal:
```
npm install

```

It will install all the dependencies, that I am using for this project. 

### Getting Started

Before starting, while in the project directory, type:
```
json-server --watch db.json --port 3004

```
This will turn the JSON server on.
Then, in a different shell, you can start the create-react-app:

```
npm start

```
Note: The actual server is running on localhost:3000, while the APIserver is running on localhost:3004. There are 3 different data sets, that this json-server is handling. The random data(localhost:3004/timezones), that will be displayed, once user signsup/loges in. The actual users list(localhost:3004/users), that saves a new user into it's array and ,finally, the current_user obj(localhost:3004/current_user), that stores the logged user. The reason, i am storring current_user in my API is, that i want him to stay logged even when we refresh the browser or close/open the browser tab. Since I am not using any real backend server, I have decided to not use cookies and make the actual 'full-stack' authentication flow. Essencially, my solution does almost the same thing.

List of dependencies for this project:

```
"dependencies": {
    "axios": "^0.17.1",
    "lodash": "^4.17.4",
    "materialize-css": "^0.100.2",
    "react": "^16.1.0",
    "react-dom": "^16.1.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.0.17",
    "redux": "^3.7.2",
    "redux-form": "^6.6.3",
    "redux-thunk": "^2.2.0"
  }
```

Hope you enjoy :)
