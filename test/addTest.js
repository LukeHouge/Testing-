let assert = require('assert');
let operation = require('../add.js')
 describe('Operations', function() {	
  describe('Subtracting', function() {	
    it('should subtract 4-3 = 1', function() {	
      assert.equal(1, operation.sub(4,3));	
    });	
    it('should subtract 4-5 = -1', function() {	
      assert.equal(-1, operation.sub(4,5));	
    });	
  });	
  describe('Adding', function() {	
    it('should add 4+3 = 7', function() {	
      assert.equal(7, operation.add(4,3));	
    });	
  });	
  describe('Dividing', function() {	
    it('should divide 4/2 = 2', function() {	
      assert.equal(2, operation.div(4,2));	
    });	
    it('should divide 4/5 = 0.8', function() {	
      assert.equal(.8, operation.div(4,5));	
    });	
  });	
  describe('Multiplying', function() {	
    it('should multiply 4*3 = 12', function() {	
      assert.equal(12, operation.mult(4,3));	
    });	
    it('should subtract 45*2 = 90', function() {	
      assert.equal(90, operation.mult(45,2));	
    });	
  });	
}); 