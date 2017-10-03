describe("app", () => {
  it("should say 'Hello World' on the page", () => {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World")
  });
});

describe('Booking', () => {
  it('has a day', () => {
    browser.get('/');
    const day = $('#day');
    expect(day.getText()).toEqual('Day')
  })
})
