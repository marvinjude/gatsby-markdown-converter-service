const marked = require("marked");

/**
 * @param {String} markdown
 * @returns {String}
 * @description Converts markdown to html
 */
function mdToHTML(markdown) {
  const result = marked(markdown);
  return result;
}

module.exports = mdToHTML;
