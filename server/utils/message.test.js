const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',() =>{
    it('should generate the correct message object', ()=>{
        var msg = generateMessage('Bruno','Ola');
        expect(typeof msg).toBe('object');
        //expect(msg).toContain({from,text});
        expect(msg.from).toBe('Bruno');
        expect(msg.text).toBe('Ola');
        expect(msg.createdAt).toBeTruthy();
        expect(typeof msg.createdAt).toBe('number');
    })
});