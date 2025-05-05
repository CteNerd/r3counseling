# R3 Counseling Website

This is the official website for R3 Counseling, providing mental health services, counseling, and wellness retreats.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is deployed using GitHub Pages.

## GitHub Pages Deployment

This website is deployed to GitHub Pages with a custom domain (r3counseling.com). The deployment is automated using GitHub Actions.

### Custom Domain Setup

The website is configured to use the custom domain r3counseling.com. This is set up with:
- A CNAME file in the repository root
- DNS settings with the domain provider pointing to GitHub Pages

### Automated Deployment

The website is automatically deployed to GitHub Pages whenever changes are pushed to the main branch using GitHub Actions workflow.

## SPA Routing with GitHub Pages

This application uses React Router for client-side routing. To support SPA (Single Page Application) routing with GitHub Pages, the following has been implemented:

1. A 404.html page that redirects all requests to index.html
2. A script in index.html that handles the redirect from 404.html
3. Updated React Router configuration with a basename corresponding to the public URL

## DNS Configuration

When setting up the custom domain with your DNS provider, you'll need to:

1. Add an A record pointing your apex domain (r3counseling.com) to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. Add a CNAME record for www subdomain (www.r3counseling.com) pointing to your GitHub Pages domain (username.github.io).

## GitHub Repository Settings

In your GitHub repository settings:

1. Go to Settings > Pages
2. Under "Build and deployment", select:
   - Source: Deploy from a branch
   - Branch: gh-pages
3. Under "Custom domain", enter: r3counseling.com
4. Check "Enforce HTTPS" for secure connections

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

Builds the app and deploys it to GitHub Pages. This command:
1. Builds the production version of the app
2. Publishes the build to the gh-pages branch

Note: When using GitHub Actions for deployment, you don't need to run this command manually as deployments are automated.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
