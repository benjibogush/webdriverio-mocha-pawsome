

suite('My react website title test', () => {


    test('discord link is present / title is correct', async () => {

        await browser.url(`https://benjisreactapp.benjibogush.repl.co/`);
        await expect(browser).toHaveUrl('https://benjisreactapp.benjibogush.repl.co/')

        await expect(browser).toHaveUrlContaining('react')

        await expect($(".App-discord")).toBeDisplayed();

        // (browser.getTitle() == "benji bogush - reactjs")
        await expect(browser).toHaveTitle('benji bogush - reactjs')
        await expect(browser).toHaveTitleContaining('reactjs')
    })

    test('check the height of the image in my website', async () => {

        /*
        Rendered size:	26 × 20 px => height is 20
        */
        const elem = $('.App-logo')
        await expect(elem).toHaveElementProperty('height', 20)
        await expect(elem).not.toHaveElementProperty('height', 0)
    })


    test('check the aspect ratio of the image in my website', async () => {

        /*
        Rendered aspect ratio:	13∶10
        Intrinsic size:	754 × 576 px
        Intrinsic aspect ratio:	377∶288
        File size:	203 kB
        */
        const elem = $('.App-discord')
        await expect(elem).toHaveText('Join Discord 7to 77+')
        await expect(elem).not.toHaveElementProperty('height', 0)
        // browser.pause(3000) // browser.waitUntil(condition, timeout, timeoutMsg, interval)

        //const saveConfig = require('./helper')
        // await browser.saveScreenshot('./screenshots/screenshot.png', saveConfig);
     
    })

})