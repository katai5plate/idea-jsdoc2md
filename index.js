const fs = require("fs");
const cheerio = require("cheerio");
const TurndownService = require("turndown"),
  turndownService = new TurndownService();
const html = fs.readFileSync(__dirname.concat("/test.html"), {
  encoding: "utf-8"
});
const $ = cheerio.load(html);
const md = turndownService.turndown($("#main").html());
const link = [
  //   "jsdoc-default.css",
  "",
  "//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.css",
  "//cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.js",
  "//cdnjs.cloudflare.com/ajax/libs/prettify/r298/lang-css.js"
];
const out = ""
  .concat(`<link type="text/css" rel="stylesheet" href="${link[0]}">`)
  .concat(`<link type="text/css" rel="stylesheet" href="${link[1]}">`)
  .concat(`<script src="${link[2]}"></script>`)
  .concat(`<script src="${link[3]}"></script>`)
  .concat("\n\n")
  .concat(md);
fs.writeFileSync(__dirname.concat("/test.md"), out, { encoding: "utf-8" });
