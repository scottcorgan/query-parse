# query-parse

Parse query strings to objects and objects to strings. Hides null or empty values.

## Install

```
npm install query-parse --save
```

## Usage

```
var qp = require('query-parse');

var paramStr = qp.toString({
  param1: 'foo',
  param2: 'bar';
});

// Outputs: "param1=foo&param2=bar";

```

## Test

```
npm test
```