// A knocked together test for node.js. Need to find/write a very simple
// way to include Qunit

var fs = require('fs');
var Zip = require('../jszip').Zip;

imgData = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=";

var zip = new Zip();
zip.add("Hello.txt", "Hello World\n");
img = zip.folder("images");
img.add("smile.gif", imgData, {base64: true});
content = zip.generate(true);

fs.writeFile("test.zip", content, encoding='binary', function (err) {
  if (err) throw err;
  console.log("test.zip generated");
});
