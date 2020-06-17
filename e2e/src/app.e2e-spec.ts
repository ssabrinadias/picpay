import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const buttonItem = element(by.className('pay-button'));
  const modal = element(by.className('pay-button'));
  const selectItem = element(by.tagName('select'));
  const selectOption = element(by.tagName('option'));
  const inputText = element(by.id('amount'));
  const buttonPayment = element(by.id('payButton'));
  const modalTitle = element(by.className('title'));

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('picpay-desafio-frontend app is running!');
  });

  it('should open modal', () => {
    page.navigateTo();
    buttonItem.click();
    expect(modal.isPresent()).toBeTruthy();
  });

  it('pay button must be enabled', async () => {
    page.navigateTo();
    await modal.click();
    await selectItem.click();
    await selectOption.click();
    inputText.value = '12345';
    expect(buttonPayment.isEnabled()).not.toBeTruthy();
  });

  it('payment must be successfully completed', async () => {
    page.navigateTo();
    await modal.click();
    await selectItem.click();
    selectItem.value = '007eb8e5b98002a2a19c6952a70c91b0',
    inputText.value = '12345';
    await buttonPayment.click();
    setTimeout(() => {
        expect(modalTitle.getText()).toEqual('Recibo de pagamento');
    }, 100);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
