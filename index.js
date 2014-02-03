
exports.create = function(name) {
  var log = {
    name: name,
    start: new Date,
    events: []
  }
  return function(msg, data) {
    // if empty msg, then assume we just want to get all logged events up to this point
    if (!msg) {
      log.end = new Date;
      log.duration = formatDuration(log.end - log.start);
      return log;
    }
    // log a new event
    var event = {};
    event.msg = msg;
    event.lapse = formatDuration(new Date - log.start);
    if (data != null) {
      event.data = data;
    }
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