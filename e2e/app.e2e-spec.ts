import { Assing2formsPage } from './app.po';

describe('assing2forms App', () => {
  let page: Assing2formsPage;

  beforeEach(() => {
    page = new Assing2formsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
