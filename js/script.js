import peliculas from './peliculas.js'

const action = document.getElementById("genero-28")

const thrill = document.getElementById("genero-53")

const adventure= document.getElementById("genero-12")


const accion = peliculas.filter((peli) => peli.genre_ids.includes(28))

const thriller = peliculas.filter((peli)=> peli.genre_ids.includes(53))

const aventura =peliculas.filter((peli) => peli.genre_ids.includes(12))


function mostrarPelis (id,genre){
    genre.forEach(pelicula =>{
    const peli = document.createElement('div')
    const img = document.createElement('img');
    img.src = "https://image.tmdb.org/t/p/w500" + pelicula.poster_path 
    const title = document.createElement('h3');
    title.textContent = pelicula.title
    peli.appendChild(img)
    peli.appendChild(title)
    id .appendChild(peli)    
    })

}
mostrarPelis(action,accion)
mostrarPelis(thrill,thriller)
mostrarPelis(adventure,aventura)