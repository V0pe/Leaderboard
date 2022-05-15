/* eslint-disable no-plusplus */
const highest = document.getElementById('highest-score');
const lowest = document.getElementById('lowest-score');
const avg = document.getElementById('Score-Average');
const mode = document.getElementById('Mode');

function mod(a) {
  a = a.sort((x, y) => x - y);

  let bestStreak = 1;
  let bestElem = a[0];
  let currentStreak = 1;
  let currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }
  return currentStreak > bestStreak ? currentElem : bestElem;
}

const getStat = (scoreArray) => {
  scoreArray = scoreArray.map((sco) => Number(sco));
  const max = Math.max(...scoreArray);
  const min = Math.min(...scoreArray);
  const average = ((scoreArray.reduce((prev, next) => prev + next, 0)) / scoreArray.length).toFixed(2);
  const modal = mod(scoreArray);
  highest.innerHTML = `${max}`;
  mode.innerHTML = `${modal}`;
  lowest.innerHTML = `${min}`;
  avg.innerHTML = `${average}`;
};
export { getStat };
