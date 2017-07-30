var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
 
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})