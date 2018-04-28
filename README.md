
A running logger for node.


## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/wookets/node-rlog.svg)](https://greenkeeper.io/)

In package.json, under dependencies, you can do...

```"rlog": "https://github.com/wookets/node-rlog/0.2.0"```


## Usage

```
var rlog = require('rlog');

log = rlog('A new running logger');

log('A log message', data);

log('all done!')

log.html(); // this will return an html formatted output of everything logged thus far

// or

log.text(); // a console friendly version

```


