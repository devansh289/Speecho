const app = require("express")();

app.get("/data", (req, res) => {
  res.send("hello");
});

/*var ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");

var toneAnalyzer = new ToneAnalyzerV3({
  username: "apikey",
  password: "jPALKIxzvlYpqZvnB0fT6ZaiPQXpUnFsM08pIBbr29Af",
  version: "2017-09-21",
  url: "https://gateway-wdc.watsonplatform.net/tone-analyzer/api/v3/tone?"
});

toneAnalyzer.tone(
  {
    tone_input: "I am going to take my horse to the old town road.",
    content_type: "text/plain"
  },
  function(err, tone) {
    if (err) {
      console.log(err);
    } else {
      console.log("tone endpoint:");
      console.log(JSON.stringify(tone, null, 2));
    }
  }
);
var listener = app.listen(8888, function() {
  console.log("Listening on port " + listener.address().port); //Listening on port 8888
});*/
