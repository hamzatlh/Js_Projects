const APIURL = "https://api.themoviedb.org/3/movie/11?api_key=3e273dc9546727679d1c810d3641f6bf";
const IMGPATH = "https://image.tmdb.org/t/p/w500/";


async function getMovie() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    respData.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = IMGPATH + movie.poster_path;

        document.body.appendChild(img);
    });

    return respData;
}

getMovie();