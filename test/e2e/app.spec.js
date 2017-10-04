describe("app", () => {
  it('has multiple days', () => {
    browser.get('/');
    const days = $$('#days p');
    expect(days.first().getText()).toEqual('2016-12-05')
    expect(days.last().getText()).toEqual('2016-12-11')
  });
  it('has buttons with available times', () => {
    browser.get('/');
    const times = $$('#days button');
    expect(times.first().getText()).toEqual('08:00:00 - 08:30:00')
    expect(times.last().getText()).toEqual('14:00:00 - 15:00:00')
  });
});
