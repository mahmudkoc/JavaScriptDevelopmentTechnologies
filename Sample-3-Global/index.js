 // Show Persons On Document
 function showPersons() {
    // İterate Persons
    $(persons).each(function (i, p) {
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
}

// Clear Persons From Html
function clearPersons() {
    $("table#persontable").find("tr.personinfo").remove();
}

(function(){
 showPersons();
}());