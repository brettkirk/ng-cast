angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(query, cb) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }
    }).then(function (data) {
      console.log(cb);
      cb(data.data.items);
    }, function (data) {
      console.log(data);
    });
  };
});
