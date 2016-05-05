var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send(getSequence())
})

var getSequence = function () {
  var plasmidObj = {}
  plasmidObj.sequence = "attcagggacccagagaggvcccda";
  plasmidObj.sequenceLength = plasmidObj.sequence.length;
  plasmidObj.features = [{name:"Feat1",index:42}];
  return plasmidObj;
}

app.listen(port);
