# R3 Counseling Website

This is the official website for R3 Counseling, providing mental health services, counseling, and wellness retreats.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is deployed to AWS for staging and production.

## Frontend Deployment

The frontend deploys through a promotion workflow in `.github/workflows/deploy.yml`:

1. Build and test on merge to `main`
2. Deploy to AWS staging
3. Wait for manual approval in GitHub `production` environment
4. Deploy to AWS production

### Required GitHub Secrets

- `AWS_STAGING_ROLE_ARN`
- `AWS_ROLE_ARN`
- `FRONTEND_STAGING_S3_BUCKET`
- `FRONTEND_PROD_S3_BUCKET`
- `FRONTEND_STAGING_CLOUDFRONT_DISTRIBUTION_ID` (optional)
- `FRONTEND_PROD_CLOUDFRONT_DISTRIBUTION_ID` (optional)
- `REACT_APP_API_URL_STAGING`
- `REACT_APP_PUBLIC_URL_STAGING`
- `REACT_APP_API_URL`
- `REACT_APP_PUBLIC_URL`

### Required GitHub Environments

- `staging`
- `production` (configure required reviewers to enforce prod approval)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

This repository deploys via GitHub Actions promotion workflows. Use local `npm run build` for verification and trigger deployment via merges/workflow dispatch.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
