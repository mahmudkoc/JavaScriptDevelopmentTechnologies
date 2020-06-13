// Authentication Util Namespace
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
}(PersonUtils));