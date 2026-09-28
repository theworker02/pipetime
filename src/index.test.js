const test = require("node:test");
const assert = require("node:assert/strict");
const lib = require("./index.js");

test("pipetime run returns output", () => {
  const out = lib.run([]);
  assert.ok(out != null);
  assert.ok(String(out).length > 0);
});
