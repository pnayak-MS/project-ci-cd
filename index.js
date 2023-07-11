
const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

// Hello World for index page
app.get('/', function (req, res) {
    return res.send("Will this work?");
})
// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
  
