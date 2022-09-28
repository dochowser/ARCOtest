async function arcousersload(page) {
  // Go to https://alpha.spgcontrols.com/login
  await page.goto('https://alpha.spgcontrols.com/login');
  await page.locator('input[name="username"]').fill('admin');
  await page.locator('input[name="password"]').fill('12arco12');
  await page.click("#loginbuttonid");
  
  await page.context().storageState({ path: 'storageState.json' });
};

module.exports = { 
  arcousersload
};

