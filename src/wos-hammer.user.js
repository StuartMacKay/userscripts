// ==UserScript==
// @name        WOS Hammer
// @match       https://wingsoverscotland.com/*
// @grant       none
// @version     1.0
// @author      Stuart MacKay
// @description Add a button to hide all posts from the commenter
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js
// ==/UserScript==

(function() {
  'use strict';

  function hideCommenter(name) {
    $('cite[class="fn"]').each(function () {
      if (name ===  $(this).attr('data-commenter')) {
        $(this).closest('li').css("display", "none");
      }
    });
  }

  $('cite[class="fn"]').each(function () {
    let name = $(this).contents().text().trim();
    $(this).prepend('<button style="cursor: default; padding: 0 4px" title="Hide all comments from ' + name + '">Hide</button> ');
    $(this).attr('data-commenter', name);
    $(this).children(":first").click(function () {
      hideCommenter(name);
    });
  });

})();

// End of script