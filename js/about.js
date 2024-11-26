/* 视频播放 */
document.getElementById('playButton').addEventListener('click', function() {
  let video = document.getElementById('myVideo');
  let button = document.getElementById('playButton');
  video.style.display = 'block'; // 显示视频
  if (video.paused) {
    video.play(); // 如果视频暂停了，就播放视频
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.textContent = 'Pause Movie';
  } else {
    video.pause(); // 如果视频正在播放，就暂停视频
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.textContent = 'Play Movie';
  }
});

/* 视频隐藏 */
document.getElementById('hideButton').addEventListener('click', function() {
  let video = document.getElementById('myVideo');
  let button = document.getElementById('playButton');
  video.style.display = 'none'; // 隐藏视频
  video.pause();
  button.style.backgroundColor = 'white';
  button.style.color = 'black';
  button.textContent = 'Play Movie';
});

/* 展开/收起详情 */
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const details = document.getElementById('details');

  toggleButton.addEventListener('click', function() {
      if (details.classList.contains('hidden')) {
          details.classList.remove('hidden');
          toggleButton.textContent = 'Fold Details<<';
      } else {
          details.classList.add('hidden');
          toggleButton.textContent = 'More Details>>';
      }
  });
});
