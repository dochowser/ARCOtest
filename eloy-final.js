async function arcoLogin(page) {
    await page.setDefaultTimeout(300000);
    // Go to https://alpha.spgcontrols.com/login
    await page.goto('https://alpha.spgcontrols.com/login');
    // Click [placeholder="Login\.Username"]
    await page.locator('//input[@name="username"]').click();
    // Fill [placeholder="Login\.Username"]
    await page.locator('//input[@name="username"]').fill('eloy.bello');
    // Click [placeholder="Login\.Password"]
    await page.locator('//input[@name="password"]').click();
    // Fill [placeholder="Login\.Password"]
    await page.locator('//input[@name="password"]').fill('Artillery01!');
    // Click text=Login.Login
    await page.locator('//button[@id="loginbuttonid"]').click();
    await page.waitForSelector('//span[contains(text(),"Dashboard")]');
    await page.goto('https://alpha.spgcontrols.com/dashboards/main');

    await delay(100000);
    await page.context().storageState({ path: 'storageState.json' });
};

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
   }

module.exports = { arcoLogin };