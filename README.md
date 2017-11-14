# simple_auth

A simple app with login/signin features.

## Installation
Before installing all the dependencies, please install

```
npm install -g json-server
```
For this app, since I don't have any backend server and DB, I'm running a local JSON server, to be able to save new users, control the current logged user, and also displaying some random dataset for him.


Then, in terminal:
```
npm install

```

It will install all the dependencies, that I am using for this project.

### Getting Started

Before starting npm, type:
```
json-server --watch test_data.json --port 3004

```
This will turn the JSON server on.
Then, in a different shell:

```
npm start

```
Note: The actual server is running on localhost:3000, while the APIserver is running on localhost:3004.

```
Hope you enjoy :)
