
module.exports = function(name) {
  var log = function(msg, data) {
    if (msg == null) return log;
    var event = {};
    event.msg = msg;
    event.data = data;
    event.lapse = formatDuration(new Date - log.start);
    log.events.push(event);
    log.end = new Date;
    log.duration = formatDuration(log.end - log.start);
    return log;
  }
  log.category = name;
  log.start = new Date;
  log.end = null;
  log.duration = null;
  log.events = [];
  log.html = function() { return format(log, 'html'); }
  log.text = function() { return format(log, 'text'); }
  return log;
}

// pass in duration in milliseconds and get back a human readible string
function formatDuration(duration) {
  if (duration < 1000) {
    duration += 'ms';
  } else if (duration > 1000) {
    duration /= 1000;
    duration += 's';
  }
  return duration;
}

function format(log, type) {
  var br = '\n';
  if (type === 'html') br = '<br />';
  var result = '';
  if (type === 'html') result += '<b>' + log.category + '</b>';
  else result += log.category;
  result += br;
  if (type === 'html') result += br;
  for (var i=0; i < log.events.length; i++) {
    result += (i+1) + '. ' + log.events[i].msg + ' [' + log.events[i].lapse + ']';
    result += br;
  }
  result += br;
  result += 'Took ' + log.duration
  return result;
}
