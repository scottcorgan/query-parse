var querystring = require('querystring');

var qp = {
  toString: function (params) {
    var _queryStr = '';
    Object.keys(params).forEach(function (key) {
      if (params[key] !== undefined) {
        if (_queryStr !== '') {
          _queryStr += '&';
        }
        
        _queryStr += key + '=' + encodeURIComponent(params[key]);
      }
    });
    
    return _queryStr;
  },
  
  toObject: function (str) {
    return querystring.parse(str);
  }
};

//
module.exports = qp;