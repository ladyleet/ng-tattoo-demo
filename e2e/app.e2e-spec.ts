import { NgTattooDemoPage } from './app.po';

describe('ng-tattoo-demo App', function() {
  let page: NgTattooDemoPage;

  beforeEach(() => {
    page = new NgTattooDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
