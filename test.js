var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('Array.prototype', function(){
    describe('.indexOf()', function(){

        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
            expect(-1).to.equal([1,2,3].indexOf(99));
            (-1).should.equal([1,2,3].indexOf(66));
        });

    });
});

describe('Math', function(){
    describe('+', function(){

        it('5+5=10', function(){
            assert.equal(10, 5+5);
            expect(10).to.equal(5+5);
            (10).should.equal(5+5);
        });

    });
});

describe('Math', function(){
    describe('*', function(){

        it('3*2=6', function(){
            assert.equal(6, 3*2);
            expect(6).to.equal(3*2);
            (6).should.equal(3*2);
        });

        xit('5*5=25', function(){
            expect(25).to.equal(5*5);
            (25).should.equal(5*5);
            assert.equal(25, 5*6, 'shit happens');
        });

    });
});