angular.module('video-player')

.component('app', {
  // TODO
  controller: function (youTube) {
    console.log(youTube.search);
    console.log(this.query);
    var context = this;
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.selectVideo = (videoClicked) => {
      this.currentVideo = videoClicked;
    };
    this.searchVideo = (newVideos) => {
      this.videos = newVideos;
      this.currentVideo = newVideos[0];
    };
    console.log(youTube.search('cow', function(vids) {
      context.videos = vids;
      context.currentVideo = vids[0];
    }));
    
  },
  templateUrl: '/src/templates/app.html'
});
