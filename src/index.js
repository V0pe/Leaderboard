import './style.css';
import leaderboard from './api.js';
import {getStat} from './stat.js';
import '@fortawesome/fontawesome-free/js/all.js';

const scoreName = document.getElementById('Name');
const scoreValue = document.getElementById('score');
const reFreshBtn = document.getElementById('get-score');
const scoreAdd = document.getElementById('add');
const callStatus = document.querySelector('#error-state');
const scoreContainer = document.querySelector('.score-bo');
const key = document.querySelectorAll('.key');

reFreshBtn.addEventListener('click', async () => {
  const scores = await leaderboard.getScores();
  const res = scores.result;
  scoreContainer.innerHTML = '';
  let scoreArray = [];
  res.forEach((e) => {
    scoreContainer.insertAdjacentHTML('beforeend', `<li>${e.user}: ${e.score}</li>`);
    scoreArray.push(e.score);
    
  });
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
console.log(key[0].textContent)
key.forEach((ke) => {
    const div = document.createElement('div');
    ke.appendChild(div);
    ke.classList.add('d-flex');
    switch (ke.textContent) {
        case 'Highest Score':
            div.innerHTML = `<i class="fa-regular fa-circle-check" style="color:green"></i>`; 
        break;
        case 'Mode Score':
            div.innerHTML = `<i class="fa-solid fa-bolt" style="color:blue"></i>`; 
        break;
        case 'Lowest Score':
            div.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color:red"></i>`; 
        break;
        case 'Average Score':
            div.innerHTML = `<i class="fa-regular fa-bell" style="color:orange"></i>`; 
        break;
        default:
            div.innerHTML = `<i class="fa-regular fa-bell"></i>`; 
    }
});



