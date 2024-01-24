import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const key = 'videoplayer-current-time';

const onPlay = function (event) {
  localStorage.setItem(key, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(key));
