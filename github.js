(function(){
  var github = function($http){
    
    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
                  .then(function(response){
                    return response.data;
                  });
    };

    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                    return response.data;
                  });
    };

    var getRepoDetails = function(username, reponame){
      return $http.get("https://api.github.com/repos/" + username + "/" + reponame)
                  .then(function(response){
                    return response.data;
                  });
    };

    var getContributors = function(url){   
      return $http.get(url)
                   .then(function(response){
                      return response.data; 
                    });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getContributors: getContributors,
      getRepoDetails: getRepoDetails
    };

  };

  var module = angular.module("githubViewer"); 
  module.factory("github", github);
}());