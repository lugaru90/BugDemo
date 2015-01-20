if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'lugaru',
        email: 'info@daechert-webservice.de',
        password: 'apple1990'
    });
    Accounts.createUser({
        username: 'lugaru2',
        email: 'e.daechert@gmx.de',
        password: 'apple1990'
    });
}
