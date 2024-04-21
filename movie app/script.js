const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=807f396a3cc446b64fa86103e283d649";
const IMGPATH = "https://image.tmdb.org/t/p/w500/";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1?api_key=807f396a3cc446b64fa86103e283d649&query=";


async function getMovie() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    const main = document.querySelector('main');
    const form = document.querySelector('form');
    const search = document.querySelector('search');

    // console.log(respData);
    
    respData.results.forEach(movie => {
        const {title, poster_path, vote_average} = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        `;
        main.appendChild(movieEl);
        
    });
    
    return respData;
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if(vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchTerm = search.value;
    
    if(searchTerm) {
        getMovie(searchTerm);
        
        main.innerHTML = '';
    }
});

getMovie();