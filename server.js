var compression = require('compression')
var express = require("express");
var mongoose = require("mongoose");


var app = express();
app.use(compression())

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});
