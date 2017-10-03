describe("app", () => {
  it("should get home page title", () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Booking App");
  });

  it("should say 'Hello World' on the page", () => {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello World")
  });
});
