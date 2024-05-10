# VIMS Lab - University of Delaware webpage

## Installation
You will need Node.js to run this project. For this, installing `nvm` and then installing node v16.20.2 on `nvm` is recommended.
Note that you do not need to have anything else installed in advance to make this project run.
- Clone this repo
In the terminal
- `npm install`. This command will install all the needed dependencies with the right versions of each. When you run this command, the folder `node_modules` will be created. If you get an error, try changing to a different node version using `nvm` (`nvm use v16.20.2` worked for Daniela)
### Run on Windows
- In Powershell run `npm run develop` to start the dev site.

### Run on Linux
- Run `gatsby develop` to start the dev site.


## Build
### on Linux
- `nvm use v16.20.2`
- `npm run build`

## Notes

These libraries do not yet fully support the upgrade to Gatsby 3.x:
* gatsby-plugin-react-helmet
* gatsby-plugin-emotion
* gatsby-plugin-postcss
* gatsby-theme-codebushi