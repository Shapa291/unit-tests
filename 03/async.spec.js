const Ajax = require("./async.js");

describe("Ajax : echo ", () => {
  test("should retuen value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toEqual("some data");
  });

  test("should return value with promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toEqual("some data");
    });
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((data) => {
      expect(data).toBeInstanceOf(Error);
    });
  });

  test("should catch error with promise", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toEqual("error");
    }
  });
});
