const axios = require('axios')
const fs = require('fs')

let url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

axios.get(url)
.then(function(res){
  let stringified = JSON.stringify(res.data)
  fs.writeFile(__dirname + '/quotes.json', stringified, 'utf8', (err) => {
    if(err) {
        console.error(err)
    }
    else {
        console.log(`successfully wrote records to db/quotes.json`)
    }
}) 
})
.catch(function(){
  console.log("ERR")
})