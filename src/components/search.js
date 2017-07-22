angular.module('video-player')

.component('search', {
  // TODO
  
  bindings: {
    cb: '<',
    context: '<'
  },
  controller: function (youTube) {
    this.search = _.debounce(function(q, cb) {
      youTube.search(q, cb); 
    }, 750);
  },
  templateUrl: '/src/templates/search.html'
});
