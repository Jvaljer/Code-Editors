const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const { type } = require('os');

// App & Port isntantiation
const app = express();
const PORT = 3000;

app.use( express.json() );
app.use( express.static('public') );

// Methods & Functions
function runJavaPost(req, res)
{
    //todo
}

// POST calls
app.post("/run-java", (req, res) => {
    runJavaPost(req, res);
}); //not clean

app.post("/save-file", (req, res) => {
    saveFile(req, res);
});


// Making sure that the file for java project compilation exists, and if not, then create it.
if (!fs.existsSync(path.join(__dirname, 'java-code')))
{
    fs.mkdirSync(path.join(__dirname, 'java-code'));
}

// Logging Server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});