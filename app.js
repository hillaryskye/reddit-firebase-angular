var app = angular.module("redditApp", ['angularMoment', 'ngAnimate']);
  app.controller("reddit", function($scope) {
    $scope.add = false;
    $scope.addComment = false;
    $scope.addSearch = false;
    $scope.favorite = false;
    $scope.valid = true;
    $scope.showComment = false;

     $scope.posts = [
       {
         name: 'Aspen',
         url: 'http://s11.postimg.org/6lx1zbzqr/maroon_bells.jpg',
         desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
         author: 'Hillary Skye',
         date: 1439507118539,
         votes: 2,
         commentsArr : ["hello"],
         favorite: true
       },
       {
        name: 'Yosemite',
        url: 'http://s11.postimg.org/ccn8d27qr/yosemite.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Leya Rowen Arnold',
        date: 1439410018539,
        votes: 7,
        commentsArr : [],
        favorite: false
      },
      {
        name: 'Cliffs of Mohr',
        url: 'http://s11.postimg.org/iz9w68pf7/cliffs_mohr.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: 1439610018539,
        votes: 40,
        commentsArr : ["hello post 3", "other comment??"],
        favorite: true
      },
      {
        name: 'Yellowstone',
        url: 'http://s11.postimg.org/6zydyxjub/yellowstone.jpg',
        desc: 'Lorem ipsum dolor sit amet, id dolor, vel scelerisque odio vestibulum volutpat, ornare vestibulum congue. Adipiscing non hendrerit vitae adipiscing ut vestibulum, metus urna. Tempor vitae sodales sem dapibus duis, ut ligula cras phasellus id, in vitae. Laoreet tortor consectetuer, arcu ut aliquid eget sit fringilla. Sed arcu, eget turpis mollis, pede at in wisi. Rhoncus feugiat, sit auctor urna nunc ac non, eros justo ullamcorper aliquam interdum ipsum mollis, sit nulla id aliquam fermentum, nunc vitae amet vivamus. Quam et ipsum eget ac adipiscing id, sed pellentesque pede lacinia.',
        author: 'Dylan Arnold',
        date: 1439622018539,
        votes: -2,
        commentsArr : ["hello post 3", "other comment??"],
        favorite: false
      }
     ]

    //  $scope.addDate = function(todaysDate) {
    //    $scope.todaysDate = Date.now()
    //    var date = new Date()
    //    console.log('date', $scope.todaysDate)
    //  }
     $scope.date = function() {
       if (post.date == undefined) {
         $scope.date = Date.now()		// we could skip all of this creating the 'post' object, if we didn't need to add the current time to it
       } else { $scope.date }
        // date: $scope.date
     }

     $scope.addPost = function(post) {
         console.log('valid', postForm.$valid);
       console.log('date', $scope.date)
       console.log('hello');
         post = {
           name: $scope.name,
           url: $scope.url,
           desc: $scope.desc,
           author: $scope.author,
           date: Date.now(),
           votes: 0,
           favorite: false,
           commentsArr: []
         }
       $scope.posts.push(post)
       console.log({name: $scope.name, url: $scope.url, desc: $scope.desc, author: $scope.author});

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

    //  $scope.addComments = function(comment) {
    //   //  console.log('num of comments', comment);
    //    if (comment.commentsArr == '') {
    //      console.log('in comments')
    //      comment.commentsArr = []
    //      .commentsArr.push(comment)
    //    } else {
    //      console.log('in comments after')
    //      comment.commentsArr.push($scope.commentsArr)
    //    }
    //  }
    //  console.log('addComment', $scope.addComment)

    $scope.addTxtComment = function(post) {
      console.log('txt', post.commentTxt)
      post.commentsArr.push(post.commentTxt)
      // post.commentsArr.push(post.commentAuth)
      console.log('arr', post.commentsArr)
    }
    // $scope.addTxtComment = function($scope) {
    //   // $scope.commentsArr = []
    //   $scope.commentsArr.push({commentAuthor: $scope.commentAuthor, commentTxt: $scope.commentTxt})
    //   $scope.commentAuthor = ""
    //   $scope.commentText = ""
    // }

     $scope.addForm = function() {
       if ($scope.add === false) {
         $scope.add = true;
       } else if ($scope.add === true) {
         $scope.add = false;
       }
     }
     $scope.addCommentsForm = function(post) {
      //  console.log('comments', $scope.addComment);
       if ($scope.addComment === false) {
         $scope.addComment = true;
       } else if ($scope.addComment === true) {
         $scope.addComment = false;
       }
     }
     $scope.showComments = function(post) {
      //  console.log('showcomments before', $scope.showComment);
       if ($scope.showComment === false) {
         $scope.showComment = true;
         console.log('showcomments', $scope.showComment);

       } else if ($scope.showComment === true) {
         $scope.showComment = false;
         console.log('showcomments after', $scope.showComment);
         console.log('addComment', $scope.addComment);

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

     $scope.addFavorite = function(post) {
       if (post.favorite === false) {
         post.favorite = true
       console.log('favorite', post.favorite);
     } else if (post.favorite === true) {
         post.favorite = false
         console.log('favorite after', post.favorite);
       }
     }
   })

   App.controller('oneCtrl', function($scope) {

     this.dropCallback = function(event, ui, title, $index) {
    if ($scope.list1.map(function(item) { return item.title; }).join('') === 'GOLLUM') {
      $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
    }
  };
});
