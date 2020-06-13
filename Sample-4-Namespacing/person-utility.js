// Add New Person
PersonUtils.addPerson = function (person) {
    person.password = btoa(person.password);
    persons.add(person);
    return persons;
};

// Remove Person
PersonUtils.removePerson = function (person) {
    if (!person && !person.username)
        return;
    persons = $.grep(persons, function (p) {
        return p.username != person.username;
    });
};
// Remove Person By Username
PersonUtils.removePersonByName = function (username) {
    if (!username)
        return;
    persons = $.grep(persons, function (p) {
        return p.username != username;
    });
}