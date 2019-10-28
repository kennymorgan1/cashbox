const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const client = require('./api/model/db');
const userRoute = require('./api/route/userroutes');

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: 'Welcome to my API',
  });
});

app.use('/api/v1/user', userRoute);

const port = process.env.PORT || 7000;

// app.listen(port, () => console.log(chalk.default.yellow.bgBlack.bold(`listening on port ${port}.....`)));
app.listen(port, () => console.log(`listening on port ${port}.....`));

module.exports = app;
