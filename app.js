const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hemanth Chebiyam trying an AWS Elastic Beanstalk Node.js Sample App! I am running a code pipeline here.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
