/***
Created By : Sharad
Description: Fetch and display list of repositories for entered user, this controller is being used.

***/

GoEuroTest.controllers.controller('repositoryListController', function($scope, API) {
    $scope.isVisible = $scope.showErrMsg = false;
    //TODO: search details from world champions list by name.
    $scope.navigateToRepository = function(repository) {
       window.open(repository.repos_url, "_blank");
    };

    //TODO: Service call to get repositories list from github.
    $scope.getUserRepositories = function() {
        $scope.repositories = [], $scope.errormessage = "",
        $scope.isVisible = $scope.showErrMsg = false;
        API.getRepositories($scope.username).success(function (data,status) {

                if(data.length <= 0){
                    $scope.errormessage = ERRMSG_NOREPOSITORY;
                }else {
                    $scope.isVisible = $scope.isVisible ? false : true;
                    for (var i = 0; i < data.length; i++) {
                        $scope.repositories.push({
                            "name": data[i].name,
                            "description": data[i].description,
                            "git_url": data[i].git_url,
                            "repos_url": data[i].clone_url
                        });
                    }
                }
                if($scope.errormessage != ""){
                    $scope.showErrMsg = $scope.showErrMsg ? false : true;
                }
        }).error(function(status){
            if(status.message == "Not Found" || status.message == "Forbidden"){
                $scope.errormessage = ERRMSG_NOTFOUND;
            }else {
                $scope.errormessage = ERRMSG_TIMEOUT;
            }
            if($scope.errormessage != ""){
                $scope.showErrMsg = $scope.showErrMsg ? false : true;
            }
        })
    }
});
