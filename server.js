const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const client = require('./api/model/db');
const userRoute = require('./api/route/userroutes');
const attributeRoute = require('./api/route/attributeroute');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());

app.use(express.static(__dirname + '/dist/cashbox'));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/attribute', attributeRoute);

app.all('*', (req,res) => {
  res.status(200).sendFile(__dirname+'/dist/cashbox/index.html');
});

const port = process.env.PORT || 7000;

// app.listen(port, () => console.log(chalk.default.yellow.bgBlack.bold(`listening on port ${port}.....`)));
app.listen(port, () => console.log(`listening on port ${port}.....`));

module.exports = app;
