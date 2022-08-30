const { chromium, firefox, webkit } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true, args: ['--js-flags="--max-old-space-size=500"'] });  // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();
    await page.goto('http://youtube.com/');
    // await page.goto('http://host.docker.internal:3000/');
    await page.screenshot({ path: 'example.png' });
    // other actions...
    await browser.close();
})();


// const puppeteer = require('puppeteer');

// (async () => {

//     const browser = await puppeteer.launch({ headless: false });
//     // userDataDir: "./user_data"
//     // const browser = await puppeteer.launch({ headless: false, args: ['--js-flags="--max-old-space-size=500"'] });

//     const page = await browser.newPage();
//     await page.goto('https://youtube.com');
//     await page.screenshot({ path: 'example.png' });

//     // await browser.close();
// })();

// sudo apt-get update 
// sudo apt install chromium
// sudo apt install chromium-browser