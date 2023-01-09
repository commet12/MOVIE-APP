let MovieNames = document.getElementById("movie-name");
let searchButton = document.getElementById("search-btn");
let result = document.getElementById("result");


let Saxeli = () => {
    let filmissaxeli = MovieNames.value;
    let url = `http://www.omdbapi.com/?t=${filmissaxeli} & apikey = ${key}`;

    if (filmissaxeli.length <= 0) {
        result.innerHTML = `<h3 class="msg"> Search movie here </h3>`;
    }

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            console.log(data.Title);
            console.log(data.Genre);
            console.log(data.Runtime);
            console.log(data.imdbRating);
            console.log(data.Poster);
            console.log(data.Actors);
            console.log(data.Plot);
            console.log(data.Year);
            console.log(data.Rated);

            if (data.Response == 'True') {
                result.innerHTML = `
                  <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div> 
                            <h2> ${data.Title}</h2>
                            <div class="rating">
                                 <h4 class="imdbsize"> ${data.imdbRating} </h4>
                            </div> 
                            <div class="details">
                                 <span>${data.Rated} </span>
                                 <span>${data.Year} </span>
                                 <span>${data.Runtime} </span>
                            </div>
                            <div class="genre">
                                <div> ${data.Genre.split(",").
                                        join("</div><div>")} </div>
                            </div>     
                        </div>  
                  </div>
                  <h3>Plot :</h3>
                  <p>${data.Plot}</p3>
                  <h3>Cast :</h3>
                  <p>${data.Actors}</p>        
                              `;
            }

            else {
                result.innerHTML = `<h3 class="msg"> ${data.Error} </h3>`;
            }
            
        
        })
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Error 404, what have you done?</h3>`;
          });
}
searchButton.addEventListener("click",Saxeli);
window.addEventListener("load", Saxeli);