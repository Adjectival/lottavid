// make API request
var apiKey = require('./../.env').apiKey;

function GitParade(){
}

GitParade.prototype.userFind = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(userResult){
    $('#output1').append(userResult.name);
    $('#output2').append(userResult.login);
    $('#output3').append(userResult.bio);
    $('#output4').append(userResult.followers);
    $('#output5').append(userResult.following);
  }).fail(function(error){
        console.log(error.responseJSON.message);
  });
};

exports.gitParadeModule = GitParade;
