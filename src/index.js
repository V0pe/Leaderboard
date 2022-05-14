import './style.css';
import leaderboard from './api.js';
import getStat from './stat.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const scoreName = document.getElementById('Name');
const scoreValue = document.getElementById('score');
const reFreshBtn = document.getElementById('get-score');
const scoreAdd = document.getElementById('add');
const callStatus = document.querySelector('#error-state');
const scoreContainer = document.querySelector('.score-bo');
const key = document.querySelectorAll('.key');
let highest = document.getElementById('highest-score');
let lowest = document.getElementById('lowest-score');
let avg = document.getElementById('Score-Average');
let mode = document.getElementById('Mode');

reFreshBtn.addEventListener('click', async () => {
  const scores = await leaderboard.getScores();
  const res = scores.result;
  scoreContainer.innerHTML = '';
  let scoreArray = [];
  res.forEach((e) => {
    scoreContainer.insertAdjacentHTML('beforeend', `<li>${e.user}: ${e.score}</li>`);
    scoreArray.push(e);
    
  });
  console.log(scoreArray);
  getStat(scoreArray);
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

key.forEach((ke) => {
    const div = document.createElement('div');
    div.innerHTML = `<i class="fa fa-star-o">`;
    ke.appendChild(div);
});



