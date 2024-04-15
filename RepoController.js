(function() {  
    var app = angular.module("githubViewer");
  
    var RepoController = function ($scope, github, $routeParams) { 
        
        $scope.reponame = $routeParams.reponame;
        $scope.username = $routeParams.username;
 
        var onGetRepoDetails = function(data){            
            $scope.issues = data.open_issues_count;
            console.log(data.contributors_url);
            github.getContributors(data.contributors_url).then(onGetContributors, onError);
        }
        
        var onGetContributors = function(data){
            $scope.contributors = data;    
        }

        var onError = function(reason){
            $scope.error = reason;
        }
        github.getRepoDetails($scope.username, $scope.reponame)
              .then(onGetRepoDetails, onError);
       
    };
    app.controller("RepoController", RepoController);
  }());
  