(function () {
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: 'aaa',
        lastName: 'Wu'
    };
    console.log(showFullName(person));
})();
