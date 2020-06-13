// Add New Person
function addPerson(person) {
    person.password = btoa(person.password);
    persons.add(person);
    return persons;
};

// Remove Person
function removePerson(person) {
    if (!person && !person.username)
        return;
    persons = $.grep(persons, function (p) {
        return p.username != person.username;
    });
};
// Remove Person By Username
function removePersonByName(username) {
    if (!username)
        return;
    persons = $.grep(persons, function (p) {
        return p.username != username;
    });
}