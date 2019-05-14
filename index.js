const express = require('express')
const app = express();
const quotesController = require('./controllers/quotes');
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api/quotes/', quotesController);


app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
  })