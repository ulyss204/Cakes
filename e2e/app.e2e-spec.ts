import { CakesPage } from './app.po';

describe('cakes App', () => {
  let page: CakesPage;

  beforeEach(() => {
    page = new CakesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
