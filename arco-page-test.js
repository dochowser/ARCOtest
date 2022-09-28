async function arcoUsersLoad(page) {

  // Go to https://alpha.spgcontrols.com/login
  await page.goto('https://alpha.spgcontrols.com/login');
  await page.waitForSelector ('input[name="username"]',{state:'visible'});
  await page.locator('input[name="username"]').fill('admin');
  await page.waitForSelector ('input[name="password"]',{state:'visible'});
  await page.locator('input[name="password"]').fill('12arco12');
  await page.waitForSelector('#loginbuttonid',{state:'visible'});
  await page.click("#loginbuttonid");
  await page.waitForNavigation()
  
  await page.context().storageState({ path: 'storageState.json' });
  
};

module.exports = { 
  arcoUsersLoad
};

