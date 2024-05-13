---
sidebar_position: 1
---

# About the APP
This APP is to serve requests for the food truck app and any other client that wants to connect to the API.

# Libraries

* [React](https://react.dev/) was used as the library to serve the APP UI.
* [Material UI](https://mui.com/) was used as the component library to serve the APP UI.
* [Create React App](https://create-react-app.dev/) was used to speed up development.
* [React Router](https://reactrouter.com/en/main) was used routing.

## Repository

https://github.com/uvaldez/foodtrucks-app

## Running the app

Clone frontend [app repo](https://github.com/uvaldez/foodtrucks-app) from github, use the following command:

```bash
git clone https://github.com/uvaldez/foodtrucks-app.git foodtrucks-app
```

Move to `foodtrucks-app` directory
```bash
cd foodtrucks-app
```

Install dependencies
```bash
npm install
```

*Important:* By default the app will be making requests to the [cloud endpoint](https://foodtrucks-api-04qa.onrender.com) to change the base url navigate to `src/constants.js` file and change `FOOD_TRUCKS_BASE_URL` with local API url http://localhost:8080/

Run project
```bash
npm start
```

APP should be running on http://localhost:3000/
