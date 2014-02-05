var cdnjson = 'undefined' == typeof window
  ? require('..')
  : require('cdnjson'); // how to do this better?

var assert = require('assert');

describe('cdnjson', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
