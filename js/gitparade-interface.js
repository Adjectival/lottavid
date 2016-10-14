var GitParade = require("./../js/gitparade.js").gitParadeModule;

// form input
$(document).ready(function() {
  var foundGitUser = new GitParade();
  $("#lookupBTN").click(function(event){
    event.preventDefault();
    var userName = $("#inputName").val();
    $("#output").empty();
    foundGitUser.userFind(userName);
  });
});
