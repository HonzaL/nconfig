/* jshint mocha:true */
/* jshint node:true */

var config = require(process.cwd() + "/lib/nconfig");
var configFile = process.cwd() + '/test/unit/data/config.js';
var _ = require('underscore');

var should = require('should');

var configDev = config({file: configFile, env: 'development'});
// NODE_ENV set to test: see mocha.js
var configTst = config({file: configFile});

describe('nconfig', function() {
  it ('extend object', function() {
    should(Object.keys(configDev.app).length).be.exactly(4);
    configDev.path.root.should.eql('/roooooooot');
  });

  it ('property override', function() {
    // string
    configDev.db.url.should.eql('postgres://pg:pg/tmp-dev');
    configTst.db.url.should.eql('postgres://pg:pg/tmp-test');

    // number
    configTst.port.should.eql(8091).and.be.a.Number();

    // array
    should(_.reduce(configTst.app.numbers, function (memo, num) {
      return memo + num;
    })).be.exactly(169+144+81+1);
  });

  it ('default values', function() {
    configDev.db.type.should.eql('postgres');
    should(_.reduce(configDev.app.numbers, function (memo, num) {
      return memo + num;
    })).be.exactly(15+12+16);
  });

  it ('property without value', function() {
    (configTst.path.root === null).should.be.true;
  });
  });
