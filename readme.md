
# Create a folder and open the folder via VSCode then inside the terminal
`npm init -y`

# install dependencies for webdriverio

`npm install --save-dev @wdio/cli @wdio/local-runner @wdio/spec-reporter request`

# Explanation
`npm init -y` creates your project without dialogue, 
`npm install --save-dev @wdio/cli` installs WebDriverIO into your project, 
`npm install --save-dev @wdio/local-runner` allows local running of tests, 
`npm install --save-dev @wdio/spec-reporter` formats test output in spec style and 
`npm install --save-dev request` installs the request module.


# Mocha Testing
npm install --save-dev @wdio/mocha-framework @wdio/crossbrowsertesting-service

# install webdriver config file, type:
`npx wdio config` 

then follow the dialog.

# Select Selenium StandAlone to access all drivers easily.

# Run your tests : 
`npx wdio run wdio.conf.js`

# if configuration is missing, it will prompt you to create one, just follow the dialog in the terminal.

# update package.json

"scripts": {
    "test": "./node_modules/.bin/wdio wdio.conf.js"
}

# single file run
wdio wdio.conf.js --spec ./tests/specs/login.js

# install image comparison service for wdio
`npm install --save-dev wdio-image-comparison-service`
> https://webdriver.io/docs/wdio-image-comparison-service/

# Take screenshot of the page (not on failure)
Install the plugin: `npm install --save-dev wdio-screenshot` 
Enable the plugin in the wdio.conf.js file in the plugings object: `plugins: { 'wdio-screenshot': {} }`
Inside your test, add the following step (for a document(full-page screenshot): browser.saveDocumentScreenshot('<screenShotsPath>/screenshotName.png');


# Take screenshot on failure
> inside wdio.conf.js add this code below.

`
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error || !passed) {
            await browser.saveScreenshot('./screenshots/screenshot.png');
        }
    },
`