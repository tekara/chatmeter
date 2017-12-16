import { ChatmeterTekaraPage } from './app.po';

describe('chatmeter-tekara App', () => {
  let page: ChatmeterTekaraPage;

  beforeEach(() => {
    page = new ChatmeterTekaraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
