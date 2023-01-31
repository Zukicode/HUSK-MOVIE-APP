const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

export function getMovies() {
  fetch('https://moviesdatabase.p.rapidapi.com/titles/', options)
    .then((resp) => {
      return resp;
    })
    .then((data) => console.log(data));
}
