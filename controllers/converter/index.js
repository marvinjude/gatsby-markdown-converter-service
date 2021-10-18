const mdToHTML = require("../../utils/mdToHTML");

/**
 * @description - This controller receives a request with markdown text and converts it to html with `marked(npm)`
 */
function mdToHtmlController(req, res, next) {
  try {
    if (req.headers["content-type"] !== "text/plain") {
      return res.json({
        success: false,
        message: "Content-Type must be text/plain",
      });
    }

    if (req.body === "") {
      return res.json({
        success: false,
        message: "No markdown text provided",
      });
    }

    const result = mdToHTML(req.body);

    res.setHeader("Content-Type", "text/plain");
    return res.send(result);
  } catch (err) {
    return res.json({
      success: false,
      message: "There was an error converting to HTML",
    });
  }
}

module.exports = { mdToHtmlController };
