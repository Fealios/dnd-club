import { DndClubPage } from './app.po';

describe('dnd-club App', function() {
  let page: DndClubPage;

  beforeEach(() => {
    page = new DndClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
