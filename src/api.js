const gameID = 'wegop0c4dTHkWvN72V4E';

const createScore = (username, userscore) => fetch(
  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: username,
      score: userscore,
    }),
  },
).then((res) => res.json());

const getScores = () => fetch(
  `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
).then((res) => res.json());

export default { createScore, getScores };