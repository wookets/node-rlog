
A running logger for node.

## Install

In package.json, under dependencies, you can do...

```"rlog": "https://github.com/wookets/node-rlog/0.1.0"```

## Usage

```
var rlog = require('rlog');

rlog = rlog.create('A new running logger');

rlog('A log message', data);

rlog() // this will return the final rlog object to be used for debugging or sending an email

```


