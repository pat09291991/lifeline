$(document).ready(function() {
  $(".play-button").click(function() {
    $(this).toggleClass("paused");
  });
});

const player = new Plyr('#player');

console.log('test test test')
