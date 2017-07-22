angular.module('video-player')

.component('app', {
  // TODO
  controller: function (youTube) {
    var context = this;
    
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    
    this.selectVideo = (videoClicked) => {
      this.currentVideo = videoClicked;
    };
    
    this.cb = (vids) => {
      context.videos = vids;
      context.currentVideo = vids[0];
    };
    
    youTube.search("Where's Waldo audiobook", this.cb);
  },
  templateUrl: '/src/templates/app.html'
});
