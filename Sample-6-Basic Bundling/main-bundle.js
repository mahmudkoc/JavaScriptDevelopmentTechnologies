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
}());// Authentication Util Namespace
var AuthUtils = (function (personUtils) {
    return {
        login: function (username, password) {
            if (!username || !password)
                return false;
            var user = $.grep(personUtils.getPersons(), function (p) {
                if (p.username == username && p.password == btoa(password))
                    return p;
            })[0];
            return user ? user : false;
        }
    }
}(PersonUtils));  // Index Utilities Namespace
  var indexUtil = (function (personUtils) {
    return {
        // Show Persons On Document
        showPersons: function () {
            // İterate Persons
            $(personUtils.getPersons()).each(function (i, p) {
                var schemaTr = $("tr#schema")
                    .clone()
                    .css('visibility', 'visible')
                    .removeAttr("id")
                    .addClass("personinfo");
                // İterate td elements
                schemaTr.find("td").each(function (j, td) {
                    switch (j) {
                        case 0:
                            {
                                $(td).text(p.username);
                                break;
                            }
                        case 1:
                            {
                                $(td).text(p.name);
                                break;
                            }
                        case 2:
                            {
                                $(td).text(p.surname);
                                break;
                            }
                    }
                });
                $("table#persontable").append(schemaTr);
            });
        },
        // Clear Persons From Html
        clearPersons: function () {
            $("table#persontable").find("tr.personinfo").remove();
        }
    }
}(PersonUtils));

$(document).ready(function () {
    indexUtil.showPersons();
});