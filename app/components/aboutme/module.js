let myapp= angular.module("Myapp",[]);
let mycontroller = function($scope){
    $scope.message="Hello world";

}
myapp.controller("mycontroller",mycontroller);
let JSONController = function($scope){
    let Student = {
        FirstName:"Keerthi",
        LastName:"Kukunoor",
        Email:"Keerthisree9595@gmail.com"
    


    }
    $scope.Student=Student;

}
myapp.controller("Student",JSONController);
