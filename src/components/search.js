angular.module('video-player')

.component('search', {
  // TODO
  
  bindings: {
    searchVids: '<'
  },
  controller: function () {
    this.search = () => {
      youTube.getData(this.query);
    };
  },
  templateUrl: '/src/templates/search.html'
});
