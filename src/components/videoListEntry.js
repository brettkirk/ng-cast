angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    videos: '<',
    cb: '<'
  },
  controller: function () {
    this.playerChange = (context) => {
      console.log(context);
    };
  },
  templateUrl: '/src/templates/videoListEntry.html'
});
