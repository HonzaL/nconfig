
describe('nconfig', function() {
  it('development environment', function() {
    var nconfig = require(process.cwd() + "/lib/nconfig")({file: process.cwd() + '/test/unit/data/config.js', env: 'development'});

    nconfig.db.url.should.eql('postgres://pg:pg/tmp-dev');
  })
})
