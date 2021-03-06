window.showKalturaSidebar = function() {
  window.jquery('#KalturaSidebar .sidebar-content').show();
  window.jquery('#KalturaSidebar .hide-sidebar').show();
  window.jquery('#KalturaSidebar .show-sidebar').hide();
  window.jquery('#KalturaSidebar').css('width', '300px');
  window.jquery('app .container-fluid').css('margin-left', '330px')
}

window.hideKalturaSidebar = function() {
  window.jquery('#KalturaSidebar .sidebar-content').hide();
  window.jquery('#KalturaSidebar .hide-sidebar').hide();
  window.jquery('#KalturaSidebar .show-sidebar').show();
  window.jquery('#KalturaSidebar').css('width', '54px');
  window.jquery('app .container-fluid').css('margin-left', '79px')
}

var BLOG_URL = 'https://corp.kaltura.com/wp-json/wp/v2/blog/?blog-category=77&per_page=5';

window.jquery(document).ready(function() {

  function postTemplate(post) {
    return '<p><a href="' + post.link + '" target="_blank">' + post.title.rendered + '</a></p>';
  }

  window.jquery.getJSON(BLOG_URL)
  .done(function(data) {
    if (data) {
      window.jquery('#KalturaBlogContent').html(data.map(postTemplate).join('\n'));
    }
  })
  .fail(function(xhr) {
    console.log('blog failure', xhr);
  })
})
