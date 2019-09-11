// const axios = require("axios");

console.log("hdedi");

fetch("/mydata", {
  method: "post",
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json" }
})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    console.log("Booo");
  });

// axios
//   .get("/mydata")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
