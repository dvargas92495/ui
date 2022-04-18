const fs = require("fs");

const brokenFile =
  "node_modules/@clerk/backend-core/src/api/utils/RestClient.ts";
const content = fs.readFileSync(brokenFile).toString();
fs.writeFileSync(brokenFile, content.replace("let body;", "let body: any;"));
