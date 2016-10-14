// make API request
var apiKey = require('./../.env').apiKey;

function GitParade(){
}

GitParade.prototype.userFind = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(userResult){
    $('#output').append(userResult.name);
  }).fail(function(error){
        console.log(error.responseJSON.message);
  });
};

exports.gitParadeModule = GitParade;
