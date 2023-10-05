const movies = [
    {
        id: 1,
        title: "Matrix",
        poster: "./imgs/matrix-poster.jpg",
        genre: "Ficção Científica",
        release: false,
        rated: "R",
        synopsis: `O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro.`,
    },
    {
        id: 2,
        title: "O Poderoso Chefão",
        poster: "./imgs/poderoso-chefao-poster.jpg",
        genre: "Drama",
        release: false,
        rated: "R",
        synopsis: `Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.`,
    },
    {
        id: 3,
        title: "A Origem",
        poster: "./imgs/a-origem-poster.jpg",
        genre: "Ação",
        release: true,
        rated: "PG-13",
        synopsis: `Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império.`,
    },
    {
        id: 4,
        title: "Pulp Fiction",
        poster: "./imgs/pulp-fiction-poster.jpg",
        genre: "Crime",
        release: false,
        rated: "R",
        synopsis: `Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.`,
    },
    {
        id: 5,
        title: "Interestelar",
        poster: "./imgs/interestellar-poster.jpg",
        genre: "Aventura",
        release: true,
        rated: "PG-13",
        synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos.`,
    },
    {
        id: 6,
        title: "A Fugas das Galinhas",
        poster: "./imgs/fuga-das-galinhas.jpg",
        genre: "Animação",
        release: true,
        rated: "G",
        synopsis: `Após frustradas tentativas de escapar da granja dos Tweedy, as galinhas, lideradas por Ginger, mantêm poucas esperanças. Mas, quando o galo voador Rocky aparece no galinheiro, elas acreditam que ele poderá ensiná-las a voar, e assim, uma nova luz surge no fim do túnel.`,
    },
];

const watchListMovies = [];

function creatCards(movie) {

    const liCard = document.createElement("li");
    const h3Title = document.createElement("h3");
    const divHeader = document.createElement("div");
    const h4Genge = document.createElement("h4");
    const spanRated = document.createElement("span");
    const divRating = document.createElement("div");
    const divMovieContent = document.createElement("div");
    const imgMovie = document.createElement("img");
    const paragraph = document.createElement("p");
    const divButtons = document.createElement("div");
    const btnWatchlist = document.createElement("button");
    const btnRental = document.createElement("button");


    liCard.classList.add("movie-card");

    h3Title.classList.add("movie-name");
    h3Title.innerText = movie.title;

    divHeader.classList.add("movie-header");

    h4Genge.classList.add("movie-genre");
    h4Genge.innerText = movie.genre;

    spanRated.classList.add("rated");
    if (movie.rated === "G") {
        spanRated.classList.add("rated-g");
    } else if (movie.rated === "PG-13") {
        spanRated.classList.add("rated-pg-13");
    } else if (movie.rated === 'R') {
        spanRated.classList.add("rated-r");
    }
    spanRated.innerText = movie.rated;

    divRating.classList.add("movie-rating");
    for (let i = 1; i <= 5; i++) {
        const iRating = document.createElement("i");
        iRating.classList.add("fa-solid", "fa-star");
        iRating.id = "star-" + i;
        divRating.appendChild(iRating);
    }

    divRating.addEventListener("click", function(event) {
        const allStars = event.currentTarget.children;        
        const clickedStar = event.target.id[5];        
        for (let i = 0; i < 5; i++) {
            if (i < clickedStar) {
                allStars[i].classList.add("star-checked");
                
            } else {
                allStars[i].classList.remove("star-checked");
            }
        }
    });

    imgMovie.classList.add("movie-img");
    imgMovie.src = movie.poster;
    imgMovie.alt = "Poster do filme " + movie.title;

    divMovieContent.classList.add("movie-content");

    paragraph.classList.add("movie-synopsis");
    paragraph.innerText = movie.synopsis;

    divButtons.classList.add("movie-buttons");

    btnWatchlist.classList.add("movie-action-button");
    btnWatchlist.innerText = "Adicionar a Watchlist";
    btnWatchlist.id = movie.id;

    btnWatchlist.addEventListener("click", function (event) {
        let movieExist = false;
        for (let i = 0; i < watchListMovies.length; i++) {
            if (event.target.id == watchListMovies[i].id) {
                movieExist = true;
            }
        }

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id == event.target.id && movieExist == false) {
                watchListMovies.push(movies[i]);
                renderWatchList(watchListMovies);
            }
        }
    });

    btnRental.classList.add("movie-action-button");
    btnRental.innerText = "Alugar";

    divHeader.append(h4Genge, spanRated, divRating);
    divMovieContent.append(imgMovie, paragraph);
    divButtons.append(btnWatchlist, btnRental);
    liCard.append(h3Title, divHeader, divMovieContent, divButtons);

    return liCard;

}

function renderMovies(list) {
    const ulListMovies = document.querySelector(".movie-list");
    ulListMovies.innerHTML = '';
    for (let i = 0; i < list.length; i++) {

        ulListMovies.append(creatCards(list[i]));
    }
}


function creatWatchListCard(movie) {


    const liCard = document.createElement("li");
    const h3Title = document.createElement("h3");
    const h4Genge = document.createElement("h4");
    const divContent = document.createElement("div");
    const divHeader = document.createElement("div");
    const spanRated = document.createElement("span");
    const imgMovie = document.createElement("img");
    const btnDel = document.createElement("button");
    const trashIcon = document.createElement("i");

    liCard.classList.add("movie-card-watchList");
    divContent.classList.add("watchList-movie-content");
    divHeader.classList.add("watchList-div-header");

    h3Title.classList.add("movie-name");
    h3Title.innerText = movie.title;

    h4Genge.classList.add("movie-genre");
    h4Genge.innerText = movie.genre;

    spanRated.classList.add("rated");
    if (movie.rated === "G") {
        spanRated.classList.add("rated-g");
    } else if (movie.rated === "PG-13") {
        spanRated.classList.add("rated-pg-13");
    } else if (movie.rated === 'R') {
        spanRated.classList.add("rated-r");
    }
    spanRated.innerText = movie.rated;

    imgMovie.classList.add("watch-list-movie-img");
    imgMovie.src = movie.poster;
    imgMovie.alt = "Poster do filme " + movie.title;

    trashIcon.classList.add("fa-regular", "fa-trash-can", "white-trash", "fa-2x");
    trashIcon.id = movie.id;

    trashIcon.addEventListener("click", function (event) {
        console.log(event.target.id);
        removeWachList(event.target.id);
    })


    divHeader.append(spanRated, h4Genge, trashIcon);
    divContent.append(imgMovie, divHeader);
    liCard.append(h3Title, divContent);
    return liCard;

}

function renderWatchList(listMovies) {
    const ulWatchList = document.querySelector(".watchlist-list");
    ulWatchList.innerHTML = '';
    for (let movie of listMovies) {
        const card = creatWatchListCard(movie);
        ulWatchList.appendChild(card);
    }

}

function removeWachList(id) {
    for (let i = 0; i < watchListMovies.length; i++) {

        if (id == watchListMovies[i].id) {
            watchListMovies.splice(i, 1);
        }
    }
    renderWatchList(watchListMovies);
}

renderMovies(movies);