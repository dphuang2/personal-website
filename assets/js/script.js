document.addEventListener('DOMContentLoaded', function() {
  var vid = document.getElementById("video");
  vid.volume = 0.05;
}, false);

function muteVideo() {
  var vid = document.getElementById("video");
  vid.muted = !vid.muted;
  var icon = document.getElementById("checkbox-image");
  if (vid.muted){
    icon.src = "assets/img/muted.png";
  }
  else{
    icon.src = "assets/img/unmuted.png";
  }
}

function volumeVideo(volume) {
  var vid = document.getElementById("video");
  vid.volume = volume;
}
