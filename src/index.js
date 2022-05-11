import './style.css';
import leaderboard from './api.js';

const scoreName = document.getElementById('Name');
const scoreValue = document.getElementById('score');
const reFreshBtn = document.getElementById('get-score');
const scoreAdd = document.getElementById('add');
const callStatus = document.querySelector('#error-state');
const scoreContainer = document.querySelector('.score-bo');

reFreshBtn.addEventListener('click', async () => {
  const scores = await leaderboard.getScores();
  const res = scores.result;
  scoreContainer.innerHTML = '';
  res.forEach((e) => {
    scoreContainer.insertAdjacentHTML('beforeend', `<li>${e.user}: ${e.score}</li>`);
  });
});

scoreAdd.addEventListener('click', async (e) => {
  e.preventDefault();
  const scoreType = parseInt(scoreValue.value, 10);
  if (scoreName.value !== '' && scoreValue.value !== '' && scoreType) {
    await leaderboard.createScore(scoreName.value, scoreValue.value);
    callStatus.innerHTML = 'Success!!!';
    scoreName.value = '';
    scoreValue.value = '';
    setTimeout(() => {
      callStatus.innerHTML = '';
    }, 3000);
  } else {
    callStatus.innerHTML = 'Enter an integer score and a valid username';
    scoreName.value = '';
    scoreValue.value = '';
    setTimeout(() => {
      callStatus.innerHTML = '';
    }, 3000);
  }
});