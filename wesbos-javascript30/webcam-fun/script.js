const video = document.querySelector('.player');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');


function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(MediaStream => {
      console.log(MediaStream);
      video.srcObject = MediaStream;
      video.play();
    });
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  console.log('Whaaat?')
}

// getVideo();