angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    currentVideo: '<'
  },
  
  controller: function () {
    // console.log(this.currentVideo);
  },
  templateUrl: '/src/templates/videoPlayer.html'
  
});