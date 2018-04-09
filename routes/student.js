const glob = require("glob"); // requires multiple modules using glob patterns 
const path = require("path"); // file and directory paths

// make json file for the api
const students = [
    {
        id: '1',
        name: 'Caroline',
    },
    {
        id: '2',
        name: 'Lisa',
    }
];

module.exports = (app) => {
    // get api/students route
    app.get('/api/students', (req, res) => {
        res.send('Hello World')
    });
    
    // ?
    glob.sync("./routes/!(index).js", {
        absolute: true,
    }).forEach(route => {
        require(route)(app);
    });
};