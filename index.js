const express = require('express')
const app = express();
const quotesController = require('./controllers/quotes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const cors = require("cors");

app.use('/api/quotes/', quotesController);
app.use(cors());

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
  })