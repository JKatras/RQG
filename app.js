// $(document).ready(getQuote);
$(document).ready(function(){
  getQuote();
});

$('#get-quote-button').on('click', function() {
  $('#quote-container').fadeOut();
  getQuote();
});

function getQuote() {
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(data) {
      var post = data.shift();
      $('#quote').html(post.content);
      $('#source').text(post.title);
      displayQuote();
      var txt = $(post.content).text() + ' -' + post.title;
      $('#twitter-share').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(txt));
    },
    cache: false
  });
}

function displayQuote() {
  $('#quote-container').fadeIn();
}