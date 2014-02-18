
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
    //assert.equal(log.html(), '<b>meow2</b><br /><br />1. pants [0ms]<br /><br />Took 0ms');
    done();
  });

  it('should get text', function(done) {
    var log = rlog('meow2');
    log('pants');
    done();
  });

  it('should test logging data and then spitting it out as text', function(done) {
    var log = rlog('meow4');
    log('pants', {name: 'piglet'});
    log('happy', {age: 34});
    done();
  });

  it('should test logging deeply nested data', function(done) {
    var log = rlog('meow4');
    var deep = {child: {child: {child: {child: {name: 'bad'}}}}};
    log('pants', deep);
    log('happy', {age: 34, ages: [393,302,302,302,3023,0239,23,{more: 'ford'}]});
    //console.log(log.text());
    done();
  });

  it('should test logging error', function(done) {
    var log = rlog('meow4');
    log('pants', Error('meoow'));
    //console.log(log.text());
    done();
  });
});
