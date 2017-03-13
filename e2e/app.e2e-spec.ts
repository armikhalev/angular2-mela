import { NgMelaPage } from './app.po';

describe('ng-mela App', () => {
  let page: NgMelaPage;

  beforeEach(() => {
    page = new NgMelaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
