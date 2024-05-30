# VIMS Lab - University of Delaware webpage

## Installation
- You need to install `npm`. In Linux the following command and version ran smoothly for the rest of the project installation:  `npm install -g npm@8.19.3`
You will need Node.js to run this project. For this, installing `nvm` and then installing node v16.20.2 on `nvm` is recommended.
Note that you do not need to have anything else installed in advance to make this project run.
- Clone this repo
In your terminal:
- `npm install`. This command will install all the needed dependencies with the right versions of each. When you run this command, the folder `node_modules` will be created. If you get an error, try changing to our desired node version using `nvm` (`nvm use v16.20.2`)
- Every time you install a new dependency after your first successful installation of dependencies, you need to stop the server (CTRL + C) and run `npm install`.
### Run on Windows Powershell
- Run `npm run develop` to start the dev site.

### Run on Linux
- Run `gatsby develop` o `npm run develop` to start the dev site.

## Build
### on Linux
- `nvm use v16.20.2`
- In case you want to deploy a test version that will not be located in GoDaddy root: `PREFIX_PATHS=true npm run build`. Make sure the `pathPrefix` line in the `gatsby-config.js` file is uncommented. Make sure the variable of that variable corresponds to your desired name for the folder in GoDaddy.
- In case you want to deploy a final version: `npm run build`Remember to comment the `pathPrefix` line in the `gatsby-config.js` file.
- It will create a folder called `public`.
- Add the `favicon.ico` into the `public` folder. This is to show an icon for tabs.
- You can give `public` folder any name of your choice, but let's say we keep the name `public`. Compress this folder. Go to GoDaddy File Manager in the `public_html` section. If you notice there is another folder with the same name, please change the name of the current one. This is only for security reasons in case the new version does not work. Upload your compressed folder and extract it. Now you should be able to see the webpage if you access https://bigdatavision.org/public/


## Notes for developers
- Every time you modify a file that is outside `src` folder, you will not see your changes on the dev site until you do not kill and restart the service.