const expect = require('expect');
const {Users} = require('./users');

describe('Users',() =>{

    var users;

    beforeEach(() =>{
        users = new Users;
        users.users = [{
            id: '1',
            name: 'Bruno',
            room: 'My Room'
        },{
            id: '2',
            name: 'John',
            room: 'Room 2'
        },{
            id: '3',
            name: 'Zé',
            room: 'My Room'
        }];
    });

    it('should add new user', ()=>{
        var users = new Users;
        var user = {
            id: '123hjgjhgjhgjhgdrt',
            name: 'Bruno',
            room: 'My Room'
        }
        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
        //expect(resUser.name[0]).toBe('Bruno');
        //expect(resUser.room[0]).toBe('My Room');
    });

    it('should list users in My Room', ()=>{
        var userList = users.getUserList('My Room');
        expect(userList).toEqual(['Bruno','Zé']);
    });

    it('should list users in Room 2', ()=>{
        var userList = users.getUserList('Room 2');
        expect(userList).toEqual(['John']);
    });

    it('should remove an existing user', ()=>{
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should NOT remove a user that does not exist', ()=>{
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
    
        expect(user.id).toBe(userId);
      });
    
      it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
    
        expect(user).toBeFalsy();
      });

});
