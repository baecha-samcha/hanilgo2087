const express = require("express");
const Unblocker = require("unblocker");
const app = express();

app.use(Unblocker({ prefix: "/proxy/" }));

app.listen(process.env.PORT || 3000, () => {
  console.log("Unblocker proxy server running");
});
