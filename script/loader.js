requirejs.config({
  paths: {
    jQuery: '../lib/jquery-3.1.1.min',
    Underscore: '../lib/underscore-min',
    Backbone: '../lib/backbone-min',
    Game: 'model/game',
    GameCollection: 'collection/gamecollection',
    Router: 'router/router',
    App: 'app',
    TitleView: 'view/titleview',
    GameTitleView: 'view/gametitleview',
    SearchView: 'view/searchview',
    GameDetailsView: 'view/gamedetailsview'
  },
  shim: {
    'jQuery': {
      exports: 'jQuery'
    },
    'Underscore': {
      exports: '_'
    },
    'Backbone': {
      deps: ['Underscore', 'jQuery'],
      exports: 'Backbone'
    }
  }
});

require(['App'], init);

function init (App) {
  'use strict';

  var app = new App();
  app.initialize();
}
