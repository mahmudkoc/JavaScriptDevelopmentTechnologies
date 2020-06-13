var PersonUtils = (function () {
    var persons = [{
            name: 'John',
            surname: 'ALISAS',
            username: 'jha',
            password: 'MTIz'
        },
        {
            name: 'Sam',
            surname: 'SONA',
            username: 'sona',
            password: 'MTIzNA=='
        }
    ];
    return {
        // Add New Person
        addPerson: function (person) {
            person.password = btoa(person.password);
            persons.add(person);
            return persons;
        },
        // Remove Person
        removePerson: function (person) {
            if (!person && !person.username)
                return;
            persons = $.grep(persons, function (p) {
                return p.username != person.username;
            });
        },
        // Remove Person By Username
        removePersonByName: function (username) {
            if (!username)
                return;
            persons = $.grep(persons, function (p) {
                return p.username != username;
            });
        },
        // Get Persons
        getPersons: function () {
            return persons;
        }
    }
}());