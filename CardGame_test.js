
// Import chai.expect 
var expect = chai.expect;


describe('Test Card Game', function()  {
    
    describe('#testPlayer', function() {
        it ('Should return player name', function() {
            var x = testPlayer('Jay');
            expect(x).to.equal('Jay');
        });


        it("Should throw an error if the parater is not pass in or not a string", function() {
            expect( function() {
                testPlayer();
            }).to.throw(Error);

        });



    });

});

