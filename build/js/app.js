(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// // make API request
// // var apiKey = require('./../.env').apiKey;
//
// function GitParade(){
// }
//
// GitParade.prototype.userFind = function(userName) {
//   $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(userResult){
//     var followersURL = userResult.followers_url;
//     $('#output1').text(userResult.name);
//     $('#output2').text(userResult.login);
//     $('#output3').text(userResult.bio);
//     $('#output4').append("<a href="+followersURL+">"+userResult.followers+"</a>");
//     $('#output5').text(userResult.public_repos);
//       $.get('https://api.github.com/users/' +userName+ '/repos?&per_page=100&access_token=' + apiKey).then(function(reposResult){
//         for (var i=0; 1<100; i++){
//           $('#repoList').append("<h4>" +reposResult[i].name+ "</h4>");
//           $('#repoList').append("<h5>" +reposResult[i].description+ "</h5>");
//         }
//       }).fail(function(error){
//         console.log(error.responseJSON.message);
//       });
//   });
// };
//
// exports.gitParadeModule = GitParade;

},{}],2:[function(require,module,exports){
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

},{"./../js/gitparade.js":1}]},{},[2]);
