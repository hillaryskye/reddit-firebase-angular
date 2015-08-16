var app = angular.module("redditApp", []);

app.controller('reddit', function($scope) {
  $scope.votes = 0;
  $scope.add = false;
  $scope.comments = [];
     $scope.posts = [
       {
         name: 'Aspen',
         url: 'http://s11.postimg.org/6lx1zbzqr/maroon_bells.jpg',
         desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
         author: 'Hillary Skye',
        //  comment: 'This is the best place to camp!'
       },
       {
        name: 'Yosemite',
        url: 'http://s11.postimg.org/ccn8d27qr/yosemite.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Leya Rowen Arnold',
        date: '12 Aug 2015'
      },
      {
        name: 'Cliffs of Mohr',
        url: 'http://s11.postimg.org/iz9w68pf7/cliffs_mohr.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: 'Today, 15 Aug 2015'
      },
      {
        name: 'Yellowstone',
        url: 'http://s11.postimg.org/6zydyxjub/yellowstone.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: '15 July 2015'
      }
     ]

     $scope.addDate = function() {
       $scope.date = Date.now()
       var date = new Date()
       console.log('date', $scope.date)
     }
     $scope.addPost = function () {
       console.log('add', $scope.add)
       console.log('hello');
       console.log({name: $scope.name, url: $scope.url, desc: $scope.desc, author: $scope.author, comments: $scope.comment});
       $scope.posts.push(
         {
           name: $scope.name,
           url: $scope.url,
           desc: $scope.desc,
           author: $scope.author,
           comments: [$scope.comment],
           date: $scope.date,
           votes: $scope.votes
         })
         $scope.add = false;
     }
     $scope.addVotes = function() {
       console.log('votes')
       $scope.votes++
     }
     $scope.delVotes = function() {
       console.log('del votes')
       $scope.votes--
     }
     $scope.addComments = function($scope, $index) {
       $scope.posts.push(
         {
           comments: $scope.posts.comments,
         })
     }
     console.log('add', $scope.add)

     $scope.addForm = function() {
       if ($scope.add === false) {
         $scope.add = true;
       } else if ($scope.add === true) {
         $scope.add = false;
       }
     }
   })
