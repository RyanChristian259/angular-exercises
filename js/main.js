


var app = angular.module("myapp", []);


app.controller("RedditController", function($scope){
      $scope.posts = [];
      $scope.addPosts = function(){
        var payload = {
        'title': $scope.title,
        'author':$scope.author,
        'imageURL': $scope.imageURL,
        'description':$scope.description};
        $scope.posts.push(payload);

        $scope.title = '';
        $scope.author = '';
        $scope.imageURL = '';
        $scope.description = '';
        console.log(payload);
      };
});





   app.controller("ExercisesController", function($scope){
     $scope.box1Counter = 0;
     $scope.box1PlusOne = function () {
       $scope.box1Counter ++;
     };
     $scope.box2Counter = 0;
     $scope.box2PlusOne = function () {
       $scope.box2Counter ++;
     };
     $scope.serving = function () {
       if (scope.box1Counter + $scope.box2Counter % 2) {
         // do something....
       }
     };
});



     app.controller("MainController", ['$scope',function($scope) {


      $scope.contacts = [];
      $scope.addContact= function(){
        var payload = {
        'name': $scope.name,
        'email':$scope.email,
        'phone': $scope.phone};
        $scope.contacts.push(payload);
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
      };



//       $scope.number = 5;

//       $scope.pickRandomNumber = function(){
//     $scope.number = Math.floor(Math.random() * 10) + 1
// };





         $scope.hello = {};
         $scope.hello.title = "Worldy yay";
         $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
         $scope.symbols = ["&spades;","&clubs;","&hearts;","&diams;"];

         $scope.dupes =[1,1,2,5,6,9,9,9];

$scope.cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
];

     }]);



