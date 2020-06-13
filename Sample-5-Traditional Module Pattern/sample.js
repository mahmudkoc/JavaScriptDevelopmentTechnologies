var personUtil2 = (function Add() {
    var persons = [{
            'asd': 123
        },
        {
            'ert': 43234
        }
    ];

    return {
        addPerson : function()
        {
            persons.push({
                'new': 43234
            });
        },
        getPersons: function()
        {
            return persons;
        }
    }
}());