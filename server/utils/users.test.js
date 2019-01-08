const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Zak',
            room: 'Abc'
        },
        {
            id: '2',
            name: 'Adam',
            room: 'Xyz'
        },
        {
            id: '3',
            name: 'John',
            room: 'Abc'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Zak',
            room: 'Abc'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    }); 

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '100';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        let userId = '100';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for room Abc', () => {
        let userList = users.getUserList('Abc');

        expect(userList).toEqual(['Zak','John']);
    });

    it('should return names for room Xyz', () => {
        let userList = users.getUserList('Xyz');

        expect(userList).toEqual(['Adam']);
    });
});