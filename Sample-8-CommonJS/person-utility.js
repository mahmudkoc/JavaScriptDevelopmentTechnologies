var persons = require("./persons");
var personUtils = {
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
    persons: persons
};

module.exports = personUtils;