describe("app", () => {
  it('has multiple days', () => {
    browser.get('/');
    const days = $$('#days p');
    expect(days.first().getText()).toEqual('Monday')
    expect(days.last().getText()).toEqual('Tuesday')
  });
});
