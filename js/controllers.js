app.controller("redditFirebaseCtrl", function($scope, $firebaseArray) {
  $scope.add = false;
  $scope.addComment = false;
  $scope.addSearch = false;
  $scope.favorite = false;
  $scope.valid = true;
  $scope.showComment = false;

   var addPostRef = new Firebase("https://redditfirebase.firebaseio.com/")

   $scope.posts = $firebaseArray(addPostRef)

   $scope.newPost = {
        name: '',
        url: '',
        desc: '',
        author: '',
        date: Date.now(),
        votes: '',
        // commentsArr : [""],
        favorite: false
      }

   $scope.addPost = function() {
     $scope.posts.$add($scope.newPost)
      .then(function(data) {
        $scope.newPost.name = ""
        $scope.newPost.url = ""
        $scope.newPost.desc = ""
        $scope.newPost.author = ""
        $scope.newPost.date = Date.now()
        $scope.newPost.votes = ""
        $scope.newPost.favorite = false
       })
     $scope.add = false;
    }

    $scope.delPost = function(post) {
    console.log('delete')
    $scope.posts.$remove(post)
    }
   $scope.addVotes = function(post) {
     post.votes++
     $scope.posts.$save(post)
       console.log('post.votes', post.votes)
   }

   $scope.delVotes = function(post) {
     console.log('del votes')
     post.votes--
     $scope.posts.$save(post)
     console.log('post.votes', post.votes)
   }

  $scope.addTxtComment = function(post) {
    if (post.commentsArr) {
      console.log('array already exsists')
      }
    else {
      console.log('yesComments')
      post.commentsArr = []
    }
    post.commentsArr.push(post.commentTxt)
    post.commentTxt = ""
    $scope.posts.$save(post)
    console.log('comment', post.commentTxt)
    console.log('post', post)
    console.log('postafter', post)

    console.log('blank txt', commentTxt);
  }

  $scope.addFavorite = function(post) {
    console.log('favorite', post.favorite)
    if (post.favorite === false) {
      post.favorite = true
      $scope.posts.$save(post)
    console.log('favorite', post.favorite);
  } else if (post.favorite === true) {
      post.favorite = false
      $scope.posts.$save(post)

      console.log('favorite after', post.favorite);
    }
  }

  $scope.toggleValue = function(value) {
    // this sets the value to the opposite - got help from Logan
    $scope[value] = !$scope[value];
  }

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
 })

//  app.controller('oneCtrl', function($scope) {
//    this.dropCallback = function(event, ui, title, $index) {
//   if ($scope.list1.map(function(item) { return item.title; }).join('') === 'GOLLUM') {
//     $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
//   }
// };
// });
