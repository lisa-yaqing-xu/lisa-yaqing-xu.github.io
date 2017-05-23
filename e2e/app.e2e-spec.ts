import { LisaPersonalSitePage } from './app.po';

describe('lisa-personal-site App', function() {
  let page: LisaPersonalSitePage;

  beforeEach(() => {
    page = new LisaPersonalSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
