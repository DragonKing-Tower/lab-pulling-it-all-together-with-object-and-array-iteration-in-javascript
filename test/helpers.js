const chai = require("chai");
const sinon = require("sinon");
global.expect = chai.expect;
const fs = require("file-system");
const jsdom = require("mocha-jsdom");
const path = require("path");
const babel = require("@babel/core"); // Use @babel/core for transformSync
const babelRegister = require("@babel/register"); // Use @babel/register for automatic compilation

const assert = require("assert");

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);
const js = fs.readFileSync(path.resolve(__dirname, "..", "index.js"), "utf-8");

// Use Babel to transform the code
const babelResult = babel.transformSync(js, {
  presets: ["@babel/preset-env"],
});

const src = babelResult.code;

babelRegister({
  presets: ["@babel/preset-env"],
});

// Pass the skipWindowCheck option to prevent setting up the window environment twice
jsdom({
  html,
  src,
  skipWindowCheck: true, // Prevent mocha-jsdom from checking for an existing window
});

module.exports = {
  assert,
  chai,
  sinon,
  fs,
  jsdom,
  path,
  babel,
  babelRegister,
  html,
  babelResult,
  src,
  js,
};
