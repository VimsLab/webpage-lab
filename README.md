# VIMS Lab - University of Delaware webpage

## Installation
Please do not install anything before you read at least all the installation section. It will save you a lot of time and frustration.
- You need to install `npm`. In Linux the following command and version ran smoothly for the rest of the project installation:  `npm install -g npm@8.19.3`.
- You will need Node.js to run this project. For this, installing `nvm` and then installing `node v16.20.2` on `nvm` is needed.
Note that you do not need to have anything else installed in advance to make this project run.
- Clone this repo
In your terminal:
- `npm install`. This command will install all the needed dependencies with the right versions of each. When you run this command, the folder `node_modules` will be created. If you get an error, try changing to our desired node version using `nvm` (`nvm use v16.20.2`)
- Once the previous step has been completed, you will not need to install anything else, as all the dependencies and needed version of the dependencies were installed when you ran `npm install`. What it did was to install based on the contents of the file `package.json`.
- Every time you install a new dependency after your first successful installation of dependencies, you need to stop the server (CTRL + C) and run `npm install`.


### Run on Windows Powershell
- Run `npm run develop` to start the dev site.

### Run on Linux
- Run `gatsby develop` o `npm run develop` to start the dev site.

## Build and deployment in GoDaddy
**Note:** The following process was tested in Linux, but it might work the same in Windows Powershell.
1. `nvm use v16.20.2`

### If you want to deploy a test version
2. In case you want to deploy a test version that will not be located in GoDaddy root: `PREFIX_PATHS=true npm run build`. Make sure the `pathPrefix` line in the `gatsby-config.js` file is uncommented. Make sure the variable of that variable corresponds to your desired name for the folder in GoDaddy. Then run `npm run build`.

### If you want to deploy a final version
2. In case you want to deploy a final version: `npm run build`. Remember to comment the `pathPrefix` line in the `gatsby-config.js` file.

### For both test and final versions
3. It will create a folder called `public`.
4. Check if inside `public` folder a file called `favicon.ico` is available. If it is, please go to the following step, if not, add the `favicon.ico` into the `public` folder. This is to show an icon in the web browser tab.
5. You can give `public` folder any name of your choice, but let's say we keep the name `public` this time. Compress this folder.
6. Go to GoDaddy File Manager in the `public_html` folder. If you notice there is another folder with the same name, please change the name of the existing one. This is only for security reasons in case the new version does not work. 
7. Upload your compressed folder.

### If you want to deploy a test version
8. Extract the folder
9. Now you should be able to see the webpage if you access https://bigdatavision.org/public/ or https://bigdatavision.org/[the name you decided to give to the folder in step 5]/

### If you want to deploy a final version
8. **Very important**: You need to delete everything from the `public_html` folder, except the following folders/files:
    - raid1 (which contains the projects websites)
    - sai (which contains the frontend for the sea ice websystem)
    - .htaccess (which is a hidden file that contains permissions to access some of the projects in raid1)
    - old (which is a backup of the 2023 version of the webpage)
    - The compressed folder you recently uploaded
9. Extract the folder you just uploaded
10. Now you can move all the contents of the `public` folder to the `public_html` folder.
11. You should now be able to see the new webpage version at https://bigdatavision.org/

## Notes for developers
- Every time you modify a file that is outside `src` folder, you will not see your changes on the dev site until you do not kill and restart the service.

## Tech Stack
This project is a Gatsby-based landing webpage created using the [Lander theme](https://gatsbytemplates.io/theme/lander-gatsby-theme/). The following technologies were used in its development:

- **JavaScript:** The main programming language used for the project.
- **React:** For building the user interface components.
- **Node.js:** Used for server-side development and build processes.
- [**Tailwind CSS:**](https://tailwindcss.com/) For styling the application with a utility-first CSS framework.
- [**Material Tailwind:**](https://www.material-tailwind.com/docs/react/installation) Additional components were developed using Material Tailwind to enhance the UI with ready-to-use components.
- [**Font Awesome:**](https://fontawesome.com/icons) To get icons.
- [**react-multi-carousel:**](https://www.npmjs.com/package/react-multi-carousel) This one was used for the Photos section, since the carousels from Material Tailwind were not working for this project.

### Why These Technologies
We chose to rebuild the landing page using these technologies to leverage modern web development practices. Unlike the previous PHP-based webpage, these technologies provide better performance, a smoother developer experience, and enhanced flexibility for building dynamic and responsive user interfaces.