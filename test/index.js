var corpora = 'undefined' == typeof window
  ? require('..')
  : require('corpora'); // how to do this better?

var assert = require('assert');

describe('corpora', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
