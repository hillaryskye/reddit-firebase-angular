var app = angular.module("redditApp", ['angularMoment']);
  app.controller("reddit", function($scope) {
    $scope.add = false;
    $scope.addComment = false;
    $scope.addSearch = false;
    // $scope.comments = [];
     $scope.posts = [
       {
         name: 'Aspen',
         url: 'http://s11.postimg.org/6lx1zbzqr/maroon_bells.jpg',
         desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
         author: 'Hillary Skye',
         date: Date.now(),
         votes: 2,
         commentsArr : ["hello"]
       },
       {
        name: 'Yosemite',
        url: 'http://s11.postimg.org/ccn8d27qr/yosemite.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Leya Rowen Arnold',
        date: Date.now(),
        votes: 7,
        commentsArr : ["hello post 22", "other comment??"]
      },
      {
        name: 'Cliffs of Mohr',
        url: 'http://s11.postimg.org/iz9w68pf7/cliffs_mohr.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: Date.now(),
        votes: 40,
        commentsArr : ["hello post 3", "other comment??"]
      },
      {
        name: 'Yellowstone',
        url: 'http://s11.postimg.org/6zydyxjub/yellowstone.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: Date.now(),
        votes: -2,
        commentsArr : ["hello post 3", "other comment??"]
      }
     ]

    //  $scope.addDate = function(todaysDate) {
    //    $scope.todaysDate = Date.now()
    //    var date = new Date()
    //    console.log('date', $scope.todaysDate)
    //  }
     $scope.addPost = function(post) {
       console.log('date', $scope.date)
       console.log('hello');
       console.log({name: $scope.name, url: $scope.url, desc: $scope.desc, author: $scope.author});
         $scope.post = {
           name: $scope.name,
           url: $scope.url,
           desc: $scope.desc,
           author: $scope.author,
           date: Date.now(),		// we could skip all of this creating the 'post' object, if we didn't need to add the current time to it
           votes: 0,
           commentsArr: []
         }
       $scope.posts.push($scope.post)
      //  $scope.post = null;
       $scope.add = false;
     }
     $scope.addVotes = function(post) {
       post.votes++
     }
     $scope.delVotes = function(post) {
       console.log('del votes')
       post.votes--
     }

     $scope.addComments = function(post, $index) {
       console.log('num of comments', $scope.commentsArr[$index]);
        console.log('num', $index);
       $scope.posts.push(
         {
           comments: $scope.posts.commentsArr,
         })
     }
     console.log('addComment', $scope.addComment)

     $scope.addForm = function() {
       if ($scope.add === false) {
         $scope.add = true;
       } else if ($scope.add === true) {
         $scope.add = false;
       }
     }
     $scope.addCommentsForm = function() {
       console.log('comments', $scope.addComment);
       if ($scope.addComment === false) {
         $scope.addComment = true;
       } else if ($scope.addComment === true) {
         $scope.addComment = false;
       }
     }
     $scope.addSearchSelect = function() {
       console.log('search', $scope.addSearch);
       if ($scope.addSearch === false) {
         $scope.addSearch = true;
         console.log('search', $scope.addSearch);

       } else if ($scope.addSearch === true) {
         $scope.addSearch = false;
       }
     }
   })
