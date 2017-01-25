      $(document).ready(function(){
        jQuery("time.timeago").timeago();
        var $container = $('.container');
       // $container.html('');
        var $header = $('header');

        var navMenuItems = ['Home', 'Moments', 'Notifications', 'Messages'];
        var navList = $('ul.navMenuItems');

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

        //adding navbar to top of page
        var navbar = document.createElement('nav');

        //adding header to top of page


        var buttonCount = streams.home.length-1;
        $('h1').append('<div><button id="newTweets">Latest Tweets</button></div>')

        //click handler to prepend tweets in queue
        $('#newTweets').on('click', function(){
          $container.prepend(getNewTweets());
        });

        //change class on mouseenter for our tweet button
        $('#newTweets').on('mouseenter', function(){
          $('button').addClass('#newTweetsHover');
        })

        // autoloading functionality
        // setInterval(function(){
        //   getNewTweets();
        // }, 7000)


        //get tweet function
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
          var user = tweet.user;
          var message = tweet.message;
          var tweetText = (user + ' @' + user + ' &#5867 ' + time + '<br><br>' + message);

        //  $('user').css('display': 'none');
          $tweet.html(tweetText);
          $tweet.appendTo($container);
          index -= 1;
        }
      }
      //populating initial tweets
      getNewTweets()
      });