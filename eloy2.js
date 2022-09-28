async function usersPage(page) {
    await page.newContext({ storageState: 'storageState.json' });
    await page.setDefaultTimeout(300000)
    await page.goto('https://alpha.spgcontrols.com/login/');
    // Go to https://alpha.spgcontrols.com/users/list/
    await page.waitForSelector('//span[contains(text(),"Users")]');
    await page.goto('https://alpha.spgcontrols.com/users/list/');
    await delay(100000);    
 
};

async function sitePage(page) {
    await page.setDefaultTimeout(300000);
    // Go to https://alpha.spgcontrols.com/hardware/sites/list
    await page.goto('https://alpha.spgcontrols.com/hardware/sites/list');
    await delay(100000);
};

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
   }

module.exports = { usersPage, sitePage };