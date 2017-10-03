describe("app", () => {
  it("should get home page title", () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Booking App");
  });
});
