const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const config = {
    port: 3000,
};

// mongo db 
mongoose.connect('mongodb://localhost/imd-demo-app', (err) => {
    if (err) {
        console.log(err);
    }
});

// Body parser
app.use(bodyParser.json({ limit: "50mb", keepExtensions: true }));

// Init routes
require("./routes/")(app);

// luister naar de poort (3000)
app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});