# query-parse

Parse query strings to objects and objects to strings. USEFUL: Removes null or empty values.

## Install

```
npm install query-parse --save
```

## Usage

```javascript
var qp = require('query-parse');

var paramStr = qp.toString({
  param1: 'foo',
  param2: 'bar';
});

// Outputs: "param1=foo&param2=bar";

var paramObj = qp.toObject('param1=foo&param2=bar&param3=');

// Outputs: 
//  {
//    param1: 'foo',
//    param2: 'bar'
//  }

```

## Test

```
npm test
```