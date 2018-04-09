const express = require('express');
const app = express();

const config = {
    port: 3000,
};

// Init routes
require("./routes/")(app);
 
app.get('/', (req, res) => {
    // stuur hello world als er naar / gesurft wordt
  res.send('Hello World')
});

// luister naar de poort (3000)
app.listen(config.port, () => {
    console.log(`Server listening at port ${config.port}.`);
});