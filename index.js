
exports.create = function(name) {
  var log = {
    name: name,
    start: new Date,
    end: null,
    duration: null,
    events: [],
    html: function() { // format a report in html and return it
      var result = '';
      result = '<b>' + log.name + '</b> <br/><br/>';
      for (var i=0; i < log.events.length; i++) {
        result += (i+1) + '. [' + log.events[i].lapse + '] ' + log.events[i].msg + '<br />';
      }
      result += '<br />Took ' + log.duration
      return result;
    }
  }
  return function(msg, data) {
    if (msg == null) { // shortcut if someone just wants to get at the log object
      return log;
    }
    var event = {};
    event.msg = msg;
    event.data = data;
    event.lapse = formatDuration(new Date - log.start);
    log.events.push(event);
    log.end = new Date;
    log.duration = formatDuration(log.end - log.start);
    return log;
  }
}


// pass in duration in milliseconds and get back a human readible string
var formatDuration = function(duration) {
  if (duration < 1000) {
    duration += 'ms';
  } else if (duration > 1000) {
    duration /= 1000;
  }
  duration += 's';
  return duration;
}