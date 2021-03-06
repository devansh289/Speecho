const app = require("express")();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.post("/mydata", (req, res) => {
  var ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
  var toneAnalyzer = new ToneAnalyzerV3({
    username: "apikey",
    password: "jPALKIxzvlYpqZvnB0fT6ZaiPQXpUnFsM08pIBbr29Af",
    version: "2017-09-21",
    url: "https://gateway-wdc.watsonplatform.net/tone-analyzer/api/v3/tone?"
  });
  toneAnalyzer.tone(
    {
      tone_input: req.body.userValue,
      content_type: "text/html"
    },
    function(err, tone) {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.stringify(tone, null, 2));
      }
    }
  );
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3004, () => {
  console.log(`Listening on PORT 3004`);
});
