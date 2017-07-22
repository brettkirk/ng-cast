angular.module('video-player')

.component('app', {
  // TODO
  controller: function (youTube) {
    console.log(youTube.search);
    console.log(this.query);
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.selectVideo = (videoClicked) => {
      this.currentVideo = videoClicked;
    };
    this.searchVideo = (newVideos) => {
      this.videos = newVideos;
      this.currentVideo = newVideos[0];
    };
    console.log(youTube.search('cow'));
    
  },
  templateUrl: '/src/templates/app.html'
});
