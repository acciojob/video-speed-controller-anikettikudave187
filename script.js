const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


const video=document.querySelector("video");
const speed=document.querySelector(".speed");
const speedBar=document.querySelector(".speed-bar");

function togglePlay() {
	video.paused ? video.play() :video.pause();
}

function updateButton() {
	speedBar.textContent=video.paused ? '► ' :'❚ ❚';
}

function handleSpeed(e){
	const y=e.offsetY;
	const percent=y/speed.offsetHeight;
	const min=0.4;
	const max=4;
	const height=`${percent*100}%`;
	const playbackRate = percent * (max - min) + min;
	  speedBar.style.height = height;
	  speedBar.textContent = playbackRate.toFixed(2) + '×';
	  video.playbackRate = playbackRate;
}

video.addEventListener("click",togglePlay);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
speed.addEventListener("mousemove",handleSpeed);








