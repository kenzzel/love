const memories = [
  { image: 'assets/foto-1.jpg', caption: 'my favorite memory ♡', title: 'Karna telah ku habiskan', sub: 'sisa cintaku hanya untukmu.' },
  { image: 'assets/foto-2.jpg', caption: 'a soft little moment', title: 'Di antara banyak cerita', sub: 'kamu tetap bagian paling indah.' },
  { image: 'assets/foto-3.jpg', caption: 'you make me smile', title: 'Bila habis sudah', sub: 'akan tetap kupilih kamu.' },
  { image: 'assets/foto-4.jpg', caption: 'until the end', title: 'Tak perlu menjadi sempurna', sub: 'cukup tetap di sini bersamaku.' }
];
const photo = document.getElementById('memory-photo');
const frame = document.getElementById('polaroid');
const title = document.getElementById('lyric-line');
const sub = document.getElementById('lyric-sub');
const caption = document.getElementById('photo-caption');
const counter = document.getElementById('counter');
const button = document.getElementById('play-button');
const icon = document.getElementById('play-icon');
let current = 0;
let playing = true;
let timer;
function showMemory(index) {
  current = (index + memories.length) % memories.length;
  const item = memories[current];
  frame.classList.add('changing');
  title.style.animation = 'none'; sub.style.animation = 'none';
  window.setTimeout(() => {
    photo.src = item.image;
    caption.textContent = item.caption;
    title.textContent = item.title;
    sub.textContent = item.sub;
    counter.textContent = `0${current + 1} / 0${memories.length}`;
    frame.style.transform = `rotate(${[-5, 4, -3, 5][current]}deg)`;
    void title.offsetWidth;
    title.style.animation = 'reveal .9s .1s forwards';
    sub.style.animation = 'reveal .9s .4s forwards';
    frame.classList.remove('changing');
  }, 550);
}
function start() { clearInterval(timer); timer = setInterval(() => showMemory(current + 1), 5200); }
function pause() { clearInterval(timer); }
button.addEventListener('click', () => {
  playing = !playing;
  if (playing) { start(); icon.textContent = 'Ⅱ'; button.setAttribute('aria-label', 'Jeda animasi'); }
  else { pause(); icon.textContent = '▶'; button.setAttribute('aria-label', 'Putar animasi'); }
});
showMemory(0); start();
