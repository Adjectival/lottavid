var GitParade = require("./../js/gitparade.js").gitParadeModule;

// form input
$(document).ready(function() {
  var foundGitUser = new GitParade();
  $("#lookupBTN").click(function(event){
    event.preventDefault();
    var userName = $("#inputName").val();
    $("#output1").empty();
    $("#output2").empty();
    $("#output3").empty();
    $("#output4").empty();
    $("#output5").empty();
    $("#repoList").empty();
    foundGitUser.userFind(userName);
  });
});
