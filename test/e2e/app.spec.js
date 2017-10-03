describe("app", () => {
  it('has multiple days', () => {
    browser.get('/');
    const days = $$('#days p');
    expect(days.first().getText()).toEqual('2016-12-05')
    expect(days.last().getText()).toEqual('2016-12-11')
  });
});
