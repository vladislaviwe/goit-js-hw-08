import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
    player.setCurrentTime(currentTime);
};
    
function onPlayerTimeUpdate(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    if (data.seconds) {
        console.log(data.seconds)
    }
};