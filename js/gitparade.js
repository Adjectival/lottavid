// make API request
var apiKey = require('./../.env').apiKey;

function GitParade(){
}

GitParade.prototype.userFind = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(userResult){
    var followersURL = userResult.followers_url;
    $('#output1').text(userResult.name);
    $('#output2').text(userResult.login);
    $('#output3').text(userResult.bio);
    $('#output4').append("<a href="+followersURL+">"+userResult.followers+"</a>");
    $('#output5').text(userResult.following+"</a>");
  }).fail(function(error){
        console.log(error.responseJSON.message);
  });
};

exports.gitParadeModule = GitParade;
