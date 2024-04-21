const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=807f396a3cc446b64fa86103e283d649";
const IMGPATH = "https://image.tmdb.org/t/p/w500/";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=807f396a3cc446b64fa86103e283d649&query=";

const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');

getMovie(APIURL);


async function getMovie(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    showMovies(respData.results);
    
    // return respData;
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview"><h3>Overview : </h3>${overview}</div>
        `;
        main.appendChild(movieEl);
        
    });
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
        getMovie(SEARCHAPI + searchTerm);
        search.value = '';
    }
});

// getMovie(APIURL);