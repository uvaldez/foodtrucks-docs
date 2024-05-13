---
sidebar_position: 4
---

# Tradeoffs

Due to time constraints, there are certain things that may not be possible to implement at this stage, but incorporating them would elevate this project to the next level.

## Backend API

1. **Request rate limitation.** We can implement a request rate limitation in order to protect the routes from DoS attack or if too many users try to connect to the API at the same time.
2. **Caching.** Implement caching to serve requests, redis for example.
3. **End-to-end test.** Implement tests to make sure no side effects are made if any method changes later.
4. **Implement Background Process to Save to DB.** We could implement a cronjob that would fetch the public sfgov.org API and save to our database if data has changed, this way if public API is down or is having issues our API is not suffering any consequences.
5. **Authentication.** To protect the routes we can implement authentication so only valid clients can are able to make requests.
6. **Implement Swagger.** In order to improve our documentation and developer experience we can add swagger for our API documentation.
7. **Environment Variables.** As of now everything lives in the code but there are some values like the data url data.sfgov.org where we are fetching the food trucks data could live in an environment variable.
8. **Lower Environments.** We can implement development, staging and production environments in order to have a proper QA and testing process.
9. **CI/CD.** Implement proper CI/CD pipelines, so we can validate code and deploy to any environment.
10. **Real Time Updates.** We could improve user experience by implementing a real-time database, if new food truck is added is reflected in real time on frontend.
11. **Typescript.** Better development experience and less bugs.

## Frontend APP

1. **State Management.** We are using component state and props which is not bad since this is a small application but it can be improved by adding something like redux.
2. **Improve UI.** It can be more attractive.
3. **Geo localization.** So we can fetch food trucks based on location.
4. **More Filters.** I only added search by food truck name or food items but we could add more options.
5. **Components.** There are some pieces of code that can be separate components, example search box.
6. **Typescript.** Better development experience and less bugs.
7. **Storybook.** Improves development experience.
