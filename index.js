// Andres manjarres - 2190826

const {Browser, Builder, By} = require("selenium-webdriver");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
  let driver = null;
  try{
    driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

    //1
    const textarea = await driver.findElement(By.css('textarea.form-control[name="my-textarea"]'));
    await textarea.sendKeys('anita lava la tina.');
    await delay(2000);

    //2
    const selectElement = await driver.findElement(By.css('select.form-select[name="my-select"]'));
    const optionThree = await selectElement.findElement(By.css('option[value="3"]'));
    await delay(2000);
    await optionThree.click();

    //3
    const hexadecimalColor = '#20A722';
    const colorInput = await driver.findElement(By.css('input[type="color"][name="my-colors"]'));
    await delay(2000);
    await colorInput.sendKeys(hexadecimalColor);

    //4
    const datePicker = await driver.findElement(By.css('input[type="text"][name="my-date"]'));
    await delay(2000);
    await datePicker.sendKeys('16/08/1970');

    //5
    const checkbox = await driver.findElement(By.id('my-check-2'));
    await delay(2000);
    await checkbox.click();

    //6
    const submit = await driver.findElement(By.css('button[type="submit"]'));
    await delay(5000);
    await submit.click();

    //7
    const titleElement = await driver.findElement(By.css('h1.display-6'));
    const titleText = await titleElement.getText();
    console.log(`Aqui sale ${titleText}`);

    //8
    const textResult = await driver.findElement(By.id('message'));
    const textValue = await textResult.getText();
    console.log(`Aqui sale ${textValue}`);

    console.log(submit);

  }catch(error){
    console.log(error);
  }finally{
    if(driver){
      //await driver.quit();
    }
  }
}

start()