var request = require("request");
var helloWorld = require("../app.js")
var base_url = "http://localhost:3000/"

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: "../jasmine_reports",
    consolidateAll: true
});
jasmine.getEnv().addReporter(junitReporter);

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        helloWorld.closeServer();
        done();
      });
    });
  });
});


