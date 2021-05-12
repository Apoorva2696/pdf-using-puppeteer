var host = "http://localhost:";
var port = 5000;
var express = require("express");
const generatePdf = require("./pdfGenerator");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.post("/download", function (request, res) {
  //root dir
  generatePdf().then((pdf) => {
    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length,
    });
    res.send(pdf);
  });
});

app.listen(port, () => {
  console.log("app is running at", port, host + port);
});
