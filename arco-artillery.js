async function arcoLogin(page) {
    await page.setDefaultTimeout(300000);
    await page.goto('https://localhost/login');
    await page.locator('//input[@name="username"]').click();
    await page.locator('//input[@name="username"]').fill('admin');
    await page.locator('//input[@name="password"]').click();
    await page.locator('//input[@name="password"]').fill('12arco12');
    await page.locator('//button[@id="loginbuttonid"]').click();
	await delay(10000);
	await page.context().storageState({ path: 'storageState.json' });
};
  
async function arcoDashboard(page, userContext) {
    await page.setDefaultTimeout(300000);
    await page.goto("https://localhost/dashboards/main");
    await delay(100000);
};
  
async function usersPage(page, userContext) {
    await page.setDefaultTimeout(300000);
    await page.goto("https://localhost/users/list/");
    await delay(100000);    
 
};

async function sitePage(page, userContext) {
    await page.setDefaultTimeout(300000);
    await page.goto("https://localhost/hardware/sites/list");
    await delay(100000);
};

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
    
module.exports = { arcoLogin, arcoDashboard, usersPage, sitePage };