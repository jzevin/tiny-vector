var assert = require('chai').assert;
var expect = require('chai').expect;
var TinyVector = require('../dist/js/tinyvector.js');

var tinyvector = new TinyVector();

describe('TinyVector', function() {

  describe('#tinyvector()',function(){
    it('should be instance of TinyVector', function() {
      expect(tinyvector).to.be.instanceOf(TinyVector);
    });
    it('should respond to add, sub, mul, div, limit, zero, clone, rotate, rotateDeg', function() {
      expect(tinyvector).itself.to.respondTo('add');
      expect(tinyvector).itself.to.respondTo('sub');
      expect(tinyvector).itself.to.respondTo('mul');
      expect(tinyvector).itself.to.respondTo('div');
      expect(tinyvector).itself.to.respondTo('limit');
      expect(tinyvector).itself.to.respondTo('zero');
      expect(tinyvector).itself.to.respondTo('clone');
      expect(tinyvector).itself.to.respondTo('rotate');
      expect(tinyvector).itself.to.respondTo('rotateDeg');
      //expect(tinyvector).itself.to.respondTo('inside');
      //expect(tinyvector).itself.to.respondTo('outside');
    });
    it('should return {x:0,y:0} no args are given', function() {
      expect(tinyvector.x).to.be.equal(0);
      expect(tinyvector.y).to.be.equal(0);
    });
  });

  describe('#tinyvector.add()',function(){
    it('should equal {x:-10,y:50}', function() {
      var vc1 = new TinyVector(15,30);
      vc1.add( new TinyVector(-25,20) );
      expect(vc1.x).to.be.equal(-10);
      expect(vc1.y).to.be.equal(50);
    });
  });

  describe('#tinyvector.sub()',function(){
    it('should equal {x:-90,y:40}', function() {
      var vc1 = new TinyVector(10,20);
      vc1.sub( new TinyVector(100,-20) );
      expect(vc1.x).to.be.equal(-90);
      expect(vc1.y).to.be.equal(40);
    });
  });

  describe('#tinyvector.mul()',function(){
    it('should equal {x:-300,y:12}', function() {
      var vc1 = new TinyVector(3,3);
      vc1.mul( new TinyVector(-100,4) );
      expect(vc1.x).to.be.equal(-300);
      expect(vc1.y).to.be.equal(12);
    });
  });

  describe('#tinyvector.div()',function(){
    it('should equal {x:-9,y:100}', function() {
      var vc1 = new TinyVector(81,300);
      vc1.div( new TinyVector(-9,3) );
      expect(vc1.x).to.be.equal(-9);
      expect(vc1.y).to.be.equal(100);
    });
  });

  describe('#tinyvector.limit()',function(){
    it('should equal {x:10,y:10}', function() {
      var vc1 = new TinyVector(81,300);
      vc1.add( new TinyVector(-9,3) );
      expect(vc1.limit(10).x).to.be.equal(10);
      expect(vc1.limit(10).y).to.be.equal(10);
    });
  });

  describe('#tinyvector.zero()',function(){
    it('should equal {x:0,y:0}', function() {
      var vc1 = new TinyVector(81,300);
      vc1.zero();
      expect(vc1.x).to.be.equal(0);
      expect(vc1.y).to.be.equal(0);
    });
  });

  describe('#tinyvector.clone()',function(){
    it('should equal {x:20,y:50}', function() {
      var vc1 = new TinyVector(20,50);
      var vc2 = vc1.clone();
      expect(vc2.x).to.be.equal(20);
      expect(vc2.y).to.be.equal(50);
    });
  });

  describe('#tinyvector.rotate(radians)',function(){
    it('should equal {x:-50.000000000000014,y:-100}', function() {
      var vc1 = new TinyVector(50,100);
      vc1.rotate(Math.PI);
      //expect(vc1.x).to.be.equal(-50.000000000000014);
      expect(vc1.y).to.be.equal(-100);
    });
  });

  describe('#tinyvector.rotateDeg(degrees)',function(){
    it('should equal {x:-50.000000000000014,y:-100}', function() {
      var vc1 = new TinyVector(50,100);
      vc1.rotateDeg(180);
      expect(vc1.y).to.be.equal(-100);
    });
  });


});
