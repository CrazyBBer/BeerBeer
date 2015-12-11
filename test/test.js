/**
 * Created by Administrator on 2015/12/11.
 * Description  test files
 */
var should = require('should');
var assert = require('assert');


describe('Test Framework',function (){
    it('should have mocha installed and running..',function (){
        assert.equal(true,true);
    } )

    it('should have the should library installed and running for float testing',function(){

        true.should.eql(true);
    })

} )


describe('Asynchronous testing',function(){
    var  result= false;
    beforeEach(function (done) {
        setTimeout(function () {

            var somthinghere =2;
            var somthingelse ='check';


            result=true;
           //complete the async beforeEach.
            done();
        },2000);
    });


    it('should NOT be so ,this makes it easier,', function (done) {
        result.should.eql(true);
        done();
    })
})
