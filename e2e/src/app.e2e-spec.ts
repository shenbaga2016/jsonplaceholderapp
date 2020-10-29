import { AppPage } from './app.po';
import { browser, logging , by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Image Gallery Application');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });



 describe('Search bar', function() {
  it('search for an element', function() {
  page.navigateTo();
  var inputElement = element(by.model('searchText'));
      expect(inputElement).toBeDefined();
      element(by.xpath('//*[@type="text"]')).sendKeys("re");
      browser.sleep(5000);

let pics=element.all(by.xpath('//*[@class="gallery"]'));
pics.count().then (count=>{
console.log(count);})
expect(pics.count()).toEqual(4);

 });

});
});
