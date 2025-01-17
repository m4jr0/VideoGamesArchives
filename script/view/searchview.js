define(['jQuery', 'Underscore', 'Backbone'], function ($, _, Backbone) {
  var SearchView = Backbone.View.extend({
    el: '#searchBar',
    events: {
      'keyup form': 'search',
      'submit form': 'search'
    },
    router: undefined,
    search: function (event) {
      event.preventDefault();
      var text = $(event.currentTarget).find('input[type=text]').val();

      if (text.length > 0) {
        this.router.navigate('/search/' + text, {trigger: true});
      } else {
        this.router.navigate('/', {trigger: true});
      }
    }
  });

  return SearchView;
});
