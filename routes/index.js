const glob = require("glob"); // requires multiple modules using glob patterns 
const path = require("path"); // file and directory paths

module.exports = (app) => {
    // get home page and send hello world
    app.get('/', (req, res) => {
        res.render('Hello World', {
            message: 'Hello World',
        });
    });
    
    // ?
    glob.sync("./routes/!(index).js", {
        absolute: true,
    }).forEach(route => {
        require(route)(app);
    });
};