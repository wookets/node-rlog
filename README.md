
A running logger for node.

## Install

In package.json, under dependencies, you can do...

```"rlog": "https://github.com/wookets/node-rlog/0.1.0"```

## Usage

```
var rlog = require('rlog');

log = rlog.create('A new running logger');

log('A log message', data);

log('all done!').html(); // this will return an html formatted output of everything logged thus far

// or

log().html();

```


