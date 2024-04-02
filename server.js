const express = require('express');
const path = require('path');

// env is enviroment variables we are going to PORT we are grabbing it from the process OR fall back to 3001
// this is dynamic port you NEED THIS
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
