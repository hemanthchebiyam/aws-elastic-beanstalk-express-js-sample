const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hemanth Chebiyam AWS trying an Elastic Beanstalk Node.js Sample App!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
