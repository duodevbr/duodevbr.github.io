import { DuodevPage } from './app.po';

describe('duodev App', function() {
  let page: DuodevPage;

  beforeEach(() => {
    page = new DuodevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
