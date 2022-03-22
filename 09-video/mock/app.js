const btn = document.querySelector('.btn');
const media = document.querySelector('.video');
const preloader = document.querySelector('.preloader');
const cover = document.querySelector('.cover');


btn.addEventListener('click', playPauseMedia);

function playPauseMedia() {
  if(media.paused) {
    media.play();
    cover.classList.remove('pause');
  } else {
    media.pause();
    cover.classList.add('pause');
  }
  console.log(cover.classList);
}

window.addEventListener('load', function() {
  preloader.classList.add('hide-preloader');
  console.log(preloader.classList)
})