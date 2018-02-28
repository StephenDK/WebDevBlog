// routes for sending users to various html pages

// dependencies

var path = require("path");

// Routes

module.exports = function(app) {
    //  each route below just handles the html page the user is sent to

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/cms", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    });

    // blog route loads blog.html
    app.get("/bog", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });
}