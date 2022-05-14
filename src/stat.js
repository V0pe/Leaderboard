let highest = document.getElementById('highest-score');
let lowest = document.getElementById('lowest-score');
let avg = document.getElementById('Score-Average');
let mode = document.getElementById('Mode');

var mod = a => {
    a = a.slice().sort((x, y) => x - y);
  
    var bestStreak = 1;
    var bestElem = a[0];
    var currentStreak = 1;
    var currentElem = a[0];
  
    for (let i = 1; i < a.length; i++) {
      if (a[i-1] !== a[i]) {
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
  };

let getStat = (scoreArray) => {
    let max = Math.max(...scoreArray);
    let min = Math.min(...scoreArray);
    let average = (scoreArray.reduce((prev,next) => prev + next,0))/scoreArray.length;
    let modal = mod(...scoreArray);
    highest.innerHTML = `${max}`;
    mode.innerHTML = `${modal}`;
}

export default { getStat };