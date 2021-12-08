# RAWG Games List

A SPA application that has two screens:

### Home
Shows a list of 20 games taken from https://api.rawg.io/games endpoint.

### Game Page
Shows detailed information about a selected game.

### Goals to the future
In future versions this will have a searchbar and some filters to refine better your search. It will include unity tests.

## BE AWARE
At first run, you will need to configure the endpoint `REACT_APP_API_URL=https://api.rawg.io/api/` in a `.env` file to be created in application's `root` folder.
Remember to get a private API KEY on http://rawg.io and also add this at `REACT_APP_API_KEY`.

After this step, run `yarn install` to get the dependencies installed and you're ready to go!

## Libraries used

### `axios`
Handle HTTP requests to API

### `@chakra-ui/react`
Component library to speed up the development proccess

### `react-router-dom`
For dynamic routing

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
