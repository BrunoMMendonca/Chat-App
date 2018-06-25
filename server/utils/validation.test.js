const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString',() =>{
    it('should not allow invalid strings', ()=>{
        var badString = isRealString(' ');
        var badString2 = isRealString(112);
        var goodString = isRealString(' RR. fsd ');

        expect(badString).toBeFalsy();
        expect(badString2).toBeFalsy();
        expect(goodString).toBeTruthy();
    });
});

