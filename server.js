var express = require("express");

var app = express();

app.get("/api/whoami", function (req, res) {
    console.log(req);
});

app.listen(process.env.PORT || 8080)