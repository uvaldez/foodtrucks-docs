---
sidebar_position: 1
---

## TL;DR

I developed a simple application that lists food trucks and includes a search functionality. The app connects to a backend that handles data retrieval and hosts all endpoints. You can access the application [here](https://foodtrucks-app.onrender.com). The frontend code is available in this [repository](https://github.com/uvaldez/foodtrucks-app), and the backend code can be found in this [repository](https://github.com/uvaldez/foodtrucks-api).

# Getting Started

Let's discover **Food Trucks San Francisco APP**.

## Running APP on the cloud

:::info
  The first time you visit the app it may take about 50 seconds to load since this is hosted in a free service and it goes to sleep after some time of inactivity, after first load application should be faster.
:::

To run the app on the cloud you just visit the following url: [foodtrucks-app](https://foodtrucks-app.onrender.com)

## Running the APP local

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

**Start with the API**

Clone [API repo](https://github.com/uvaldez/foodtrucks-api) from github, use the following command:

```bash
git clone https://github.com/uvaldez/foodtrucks-api.git foodtrucks-api
```

Move to `foodtrucks-api` directory
```bash
cd foodtrucks-api
```

Install dependencies
```bash
npm install
```

Run project
```bash
node app.js
```
API should be running on http://localhost:8080/

**Clone frontend APP**

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

:::info
*Important:* By default the app will be making requests to the [cloud endpoint](https://foodtrucks-api-04qa.onrender.com) to change the base url navigate to `src/constants.js` file and replace `FOOD_TRUCKS_BASE_URL` with local API url http://localhost:8080/
:::

Run project
```bash
npm start
```

APP should be running on http://localhost:3000/
