import { OnlineQuestionAnswereExamPage } from './app.po';

describe('online-question-answere-exam App', () => {
  let page: OnlineQuestionAnswereExamPage;

  beforeEach(() => {
    page = new OnlineQuestionAnswereExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
