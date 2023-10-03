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
        synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
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

function creatCards(movie) {
   
    

    const liCard = document.createElement("li");
    const h3Title = document.createElement("h3");
    const divHeader = document.createElement("div");
    const h4Genge = document.createElement("h4");
    const spanRated = document.createElement("span");
    const ulRating = document.createElement("ul");
    const liRating = document.createElement("li");
    const divMovieContent = document.createElement("div");
    const imgMovie = document.createElement("img");
    const paragraph = document.createElement("p");
    const divButtons = document.createElement("div");
    const btnWatchlist = document.createElement("button");
    const btnRental = document.createElement("button");

    liCard.classList.add("movie-card");
    h3Title.classList.add("movie-name");
    divHeader.classList.add("movie-header");
    h4Genge.classList.add("movie-genre");
    spanRated.classList.add("rated");
    ulRating.classList.add("movie-rating");
    liRating.classList.add("star");
    imgMovie.classList.add("movie-img");
    divMovieContent.classList.add("movie-content");
    paragraph.classList.add("movie-synopsis");
    divButtons.classList.add("movie-buttons");
    btnWatchlist.classList.add("movie-action-button");
    btnRental.classList.add("movie-action-button");

    h3Title.innerText = movie.title;
    h4Genge.innerText = movie.genre;
    spanRated.innerText = movie.rated;
    imgMovie.src = movie.poster;
    imgMovie.alt = "Poster do filme " + movie.title;
    paragraph.innerText = movie.synopsis;
    btnWatchlist.innerText="Adicionar a Watchlist";
    btnRental.innerText="Alugar";

    ulRating.append(liRating);
    divHeader.append(h4Genge, spanRated, ulRating);
    divMovieContent.append(imgMovie, paragraph);
    divButtons.append(btnWatchlist, btnRental);
    liCard.append(h3Title, divHeader, divMovieContent, divButtons);

    return liCard;

}

function renderMovies(list) {
    const ulListMovies = document.querySelector(".movie-list");
    ulListMovies.innerHTML='';
    for (let i = 0; i < list.length; i++) {
        
        ulListMovies.append(creatCards(list[i]));
    }
}

renderMovies(movies);





//   <li class="movie-card">
//                 <h3 class="movie-name">Matrix</h3>
//                 <div class="movie-header">
//                     <h4 class="movie-genre">Ficção Cientifica</h4>
//                     <span class="rated">PG-13</span>
//                     <ul class="movie-rating">
//                         <li class="star"></li>
//                     </ul>
//                 </div>
//                 <div class="movie-content">
//                     <img src="./imgs/matrix-poster.jpg" alt="Poster Matrix" class="movie-img">

//                     <p class="movie-synopsis">
//                         O jovem programador Thomas Anderson é atormentado por
//                         estranhos pesadelos em que está sempre conectado por cabos a
//                         um imenso sistema de computadores do futuro.
//                     </p>
//                 </div>
//                 <div class="movie-buttons">
//                     <button class="movie-action-button">Adicionar a Watchlist</button>
//                     <button class="movie-action-button">Alugar</button>
//                 </div>
//             </li>