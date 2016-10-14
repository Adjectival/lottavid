# Gitparade :octocat::loop::thought_balloon:
## _Github API demonstration_
_an Epicodus Project, October 2016_
### By _Alexander Jacks_

### Description
Gitparade allows a user to enter the name of a Github member and see their recent workflow (repositories, repos) with descriptions. Only publicly-shared work is available.

## Setup
1. Clone/download this project directory

2. Request your own API Key from Github Settings [as seen here](https://dl.dropboxusercontent.com/s/qk0qcsy487yg7ci/githubgeneratetoken.png?dl=0)

3. Create a one-line file named ".env" in your project directory to include your key.
```
exports.apiKey = "your-github-api-key";
```

4. Open terminal in your project directory
```
$ npm install
$ bower install
$ gulp serve
```

## Known Issues
Descriptions are sourced directly from Github README files like this one. As GH users supply their own repository descriptions, the quality and detail of these will vary.


## Technologies Used
- Application: Node.js, JQuery
- Configuration: npm, Gulp, Bower
- Testing: JSHint, Chrome
- Design: Bootstrap 3, Sass

### Support and contact details
_Contact alexd (dot) jacks (at) gmail (dot) com with questions regarding this software.
Check out some of these resources to understand the technologies:_
- _developer.github.com/v3/_
- _learnhowtoprogram.com_
- _w3schools.com_
- _getbootstrap.com_

### Legal
_This software is available under the MIT license and can be modified and used for any purposes without express permission of the author._

˚2016˚ **AJ**
