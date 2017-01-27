      $(document).ready(function(){

        //This adds time ago functionality
        jQuery("time.timeago").timeago();

        var $container = $('.container');
        var $header = $('header');
        var navMenuItems = ['Home', 'Moments', 'Notifications', 'Messages'];
        var navList = $('ul.navMenuItems');


        // Creating button and adding it to page
        var buttonCount = streams.home.length-1;
        $('#whatsHappeningBox').append('<div><button id="newTweets">Latest Tweets</button></div>')

        // Click handler to prepend tweets in queue
        $('#newTweets').on('click', function(){
          getNewTweets();
        });

        $('.container').on('click', '.individualUser', function(item){
          getUserTweets(this.text);
        });

        //change class on mouseenter for our tweet button
        $('#newTweets').on('mouseenter', function(){
          $('button').addClass('#newTweetsHover');
        })


        var getUserTweets = function(passedInUser){
          var index = 0;
          ($container).html('');

          while(index < streams.users[passedInUser].length-1){
            console.log('index: ' + index);
            console.log('streams.length: ' + streams.users[passedInUser].length);
            var tweet = streams.users[passedInUser][index];
            console.log('user tweets: ', streams.users[passedInUser]);
            var $tweet = $('<div class="tweetDiv"></div>');
            var time = jQuery.timeago(new Date());
            var message = tweet.message;
            var user = tweet.user;
            var tweetUser = ('<a href="#" class="individualUser">' + user + '</a>' + ' @' + user + ' &#5867 ' + time)
            var tweetText = ('<br><br>' + message);
            $tweet.html(tweetUser + tweetText);
            $tweet.prependTo($container);
            index++;
          }
        }

        //get tweet function for all users
        var getNewTweets = function(el){
          var index = 0;
            //GENERAL TWEET FUNCTION
          while(index <= streams.home.length){
            var tweet = streams.home[index];
            var $tweet = $('<div class="tweetDiv"></div>');
            var time = jQuery.timeago(new Date());
            var message = tweet.message;
            var user = tweet.user;
            var tweetUser = ('<a href="#" class="individualUser">' + user + '</a>' + ' @' + user + ' &#5867 ' + time)
            var tweetText = ('<br><br>' + message);
            $tweet.html(tweetUser + tweetText);
            $tweet.prependTo($container);
            index++;
          }
        }
      getNewTweets();
      });



