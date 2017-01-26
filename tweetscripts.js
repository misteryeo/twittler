      $(document).ready(function(){

        //This adds time ago functionality
        jQuery("time.timeago").timeago();

        var $container = $('.container');
       // $container.html('');
        var $header = $('header');
        var navMenuItems = ['Home', 'Moments', 'Notifications', 'Messages'];
        var navList = $('ul.navMenuItems');


        //creating button and adding it to page
        var buttonCount = streams.home.length-1;
        $('#whatsHappeningBox').append('<div><button id="newTweets">Latest Tweets</button></div>')

        //click handler to prepend tweets in queue
        $('#newTweets').on('click', function(){
          getNewTweets();
        });

        //change class on mouseenter for our tweet button
        $('#newTweets').on('mouseenter', function(){
          $('button').addClass('#newTweetsHover');
        })


        //get tweet function for all users
        var getNewTweets = function(){
          var index = streams.home.length - 1;

          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div class="tweetDiv"></div>');
            var time = jQuery.timeago(new Date());

            //USER DATA
            var user0 = $("<a />", {
              user : tweet.user,
              message : tweet.message,
              text : (message + ' ' )
            });
            var el = $('<a href="www.google.com">google</a>');

            var user = tweet.user;
            var message = tweet.message;
            var tweetUser = ('<a href="http://www.twitter.com">' + user + '</a>' + ' @' + user + ' &#5867 ' + time)
            var tweetText = ('<br><br>' + message);

          //  $('user').css('display': 'none');
            $tweet.html(tweetUser + tweetText);
            $tweet.prependTo($container);
            index -= 1;
          }
        }
/*
        //get tweet for individual users
           var getNewTweetsUser = function(){

               var index = streams.home.length - 1;

              while(index >= 0){
                var tweet = streams.home[index];
                var $tweet = $('<div class="tweetDiv"></div>');
                var time = jQuery.timeago(new Date());

                //USER DATA
                var user0 = $("<a />", {
                  user : tweet.user,
                  message : tweet.message,
                  text : (message + ' ' )
                });
                var el = $('<a href="www.google.com"></a>');
                var user = tweet.user;
                var message = tweet.message;
                var tweetUser = $('<a href="http://www.twitter.com">user</a>' + ' @' + user + ' &#5867 ' + time);
                var tweetText = $('<br><br>' + message);
                var tweetLink = $('#my-link').html('<a href="http://www.google.com">Google</a>');


              //  $('user').css('display': 'none');
                $tweet.html(tweetUser + tweetText);
                $tweet.html(tweetLink);
                $tweet.prepend($container);
                index -= 1;
              }
            }
            */
      //populating initial tweets
      getNewTweets()
      });

      //USER ADD TWEET
      //get message from textbox
      var message = $('textarea').val();
      console.log(message);
      var writeTweet = function(message){
        if(!visitor){
          throw new Error('set the global visitor property!');
        }
        var tweet = {};
        tweet.user = visitor;
        tweet.message = message;
        addTweet(tweet);
      };

    // autoloading functionality
        // setInterval(function(){
        //   getNewTweets();
        // }, 7000)


  // $.each(navList, function(i)
        // {
        //     var li = $('<li/>')
        //         .addClass('ui-menu-item')
        //         .attr('role', 'menuitem')
        //         .appendTo(navList);
        //     var aaa = $('<a/>')
        //         .addClass('ui-all')
        //         .text(navMenuItems[i])
        //         .appendTo(li);
        // });




