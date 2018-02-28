# drange

For adding/subtracting sets of range of numbers.

[![Build Status](https://secure.travis-ci.org/fent/node-drange.svg)](http://travis-ci.org/fent/node-drange)
[![Dependency Status](https://david-dm.org/fent/node-drange.svg)](https://david-dm.org/fent/node-drange)
[![codecov](https://codecov.io/gh/fent/node-drange/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-drange)

# Usage

```
const DRange = require('drange');

var allNums = new DRange(1, 100); //[ 1-100 ]
var badNums = DRange(13).add(8).add(60,80); //[8, 13, 60-80]
var goodNums = allNums.clone().subtract(badNums);
console.log(goodNums.toString()); //[ 1-7, 9-12, 14-59, 81-100 ]
var randomGoodNum = goodNums.index(Math.floor(Math.random() * goodNums.length));
```

# Install

```bash
npm install drange
```

# Tests

Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```
