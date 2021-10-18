const request = require("supertest");
const app = require("../app.js");

describe("POST /converter/md-to-html", () => {
  describe("When plain text is passed with a text/plain content type", () => {
    test("it should respond with a 200 status code", async () => {
      const response = await request(app)
        .post("/converter/md-to-html")
        .set("Content-Type", "text/plain")
        .send("hello world");

      expect(response.statusCode).toBe(200);
    });

    test("it should return text/plain as content-type", async () => {
      const response = await request(app)
        .post("/converter/md-to-html")
        .set("Content-Type", "text/plain")
        .send("hello world");

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("text/plain")
      );
    });

    test("it should respond with the correct HTML", async () => {
      const input = `**Gatsby** is #Super *Duper* Good! You should [check it out](https://gatsbyjs.org)`;
      const expected = `<p><strong>Gatsby</strong> is #Super <em>Duper</em> Good! You should <a href="https://gatsbyjs.org">check it out</a></p>\n`;

      const response = await request(app)
        .post("/converter/md-to-html")
        .set("Content-Type", "text/plain")
        .send(input);

      expect(response.text).toEqual(expected);
    });
  });
});
