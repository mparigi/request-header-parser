var express = require("express");

var app = express();

app.get("/api/whoami", function (req, res) {
    var os = req.headers["user-agent"].split(') ')[0].split(' (')[1];
    var ip = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(',')[0];
    
    res.end(JSON.stringify({
        "ipaddress": ip,
        "language": lang,
        "software": os
    }));
});

app.listen(process.env.PORT || 8080)