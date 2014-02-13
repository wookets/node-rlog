
var assert = require('assert');
var rlog = require('../');

describe('rlog', function() {

  it('should set a category, start, and events', function(done) {
    var log = rlog('meow');
    assert.equal(log.category, 'meow');
    assert(log.start);
    assert(log.events);
    done();
  });

  it('should log an event', function(done) {
    var log = rlog('meow');
    log('pants');
    assert.equal(log.events.length, 1);
    assert.equal(log.events[0].msg, 'pants');
    done();
  });

  it('should get html', function(done) {
    var log = rlog('meow2');
    log('pants');
    assert.equal(log.html(), '<b>meow2</b><br /><br />1. pants [0ms]<br /><br />Took 0ms');
    done();
  });

  it('should get text', function(done) {
    var log = rlog('meow2');
    log('pants');
    done();
  });
});
