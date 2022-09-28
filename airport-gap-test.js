async function airportsList(page) {
    await page.goto('https://airportgap.dev-tester.com/');
    await page.locator('a >> text="View Airports"').click();
  };
  
  module.exports = { airportsList };