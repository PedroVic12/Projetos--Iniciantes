// Base de dados
const baseMusicas = [
    {
        'name': 'Anonymous Choir - Unus Ex Discipulis Meis',
        'artist': 'Anonymous',
        'path': './src/audio/Anonymous_Choir_-_Unus_Ex_Discipulis_Meis.mp3',
        'album': 'Good Enough',
    },
    {
        'name': 'Felipe Sarro - C Schumann Scherzo in C minor Op 14',
        'artist': 'Anonymous',
        'path': './src/audio/Felipe_Sarro_-_11_-_C_Schumann_Scherzo_in_C_minor_Op_14.mp3',
        'album': 'Good Enough 2',
    },
    {
        'name': 'James Scott - Frog Legs Rag 1906 piano roll',
        'artist': 'Anonymous',
        'path': './src/audio/James_Scott_-_01_-_Frog_Legs_Rag_1906_piano_roll.mp3',
        'album': 'Good Enough 3',
    }
];

const listaMusicas = document.querySelector('.lista-musicas');
const tagAudio=  document.getElementById('tag-audio')
const primeiraMusica = baseMusicas[0]
tagAudio.src= primeiraMusica.path

atualizaPlay(baseMusicas[0].album, baseMusicas[0].name)
const botaoPausar = document.getElementById('btn-pause')

const botaoPlay = document.getElementById('btn-play')

let musicaAtual = 0

function construirPlaylist(musica, musicaId){
    
    const musicaElemento = document.createElement('li')
    const nomeMusica = document.createElement('p')
    const nomeArtista = document.createElement('p')
    const nomeAlbum = document.createElement('p')

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiro-item'

    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica)
    musicaElemento.appendChild(nomeArtista)
    musicaElemento.appendChild(nomeAlbum)

    musicaElemento.addEventListener('click', tocarMusica)

    listaMusicas.appendChild(musicaElemento);
}

// Loop
for(let contador = 0; contador < baseMusicas.length; contador++){
//    console.log(baseMusicas[contador]);
    construirPlaylist(baseMusicas[contador], contador)
}

function atualizaPlay(nome,musica){
    const nomeMusica = document.getElementById('nomeMusica')
    const nomeAlbum = document.getElementById('nomeAlbum')
    // const fotoAlbum = document.getElementById('fotoAlbum')

    // fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nome
}
function tocarMusica(evento){
    // console.log(evento.currentTarget)
    const elementoClicado = evento.currentTarget

    if (elementoClicado.tagName === 'li'){
        const musicaId = elementoClicado.dataset.id
        const musicaSelecionada = baseMusicas[musicaId]
        tagAudio.src = musicaSelecionada.path

        musicaAtual = Number(musicaId)

        tagAudio.play()    
        let nomeAlbum = baseMusicas[musicaAtual].album
        let nomeMusica = baseMusicas[musicaAtual].name
        atualizaPlay(nomeAlbum, nomeMusica)

    } else {
        if(tagAudio.paused){
            tagAudio.play()
        }else{
            tagAudio.pause()
        }dadsadasdassdasdasda
    }
}
botaoPlay.addEventListener('click', tocarMusica)

function pausarMusica(){
    tagAudio.pause()
}

botaoPausar.addEventListener('click', pausarMusica);

// proxima musica
function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0
    }else {
        musicaAtual++
    }
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()
    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlay(nomeAlbum, nomeMusica)
    
}

const btnNext = document.getElementById('btn-next')
btnNext.addEventListener('click', tocarProximaMusica)


// Musica anterior
function tocarMusicaAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1
    }else {
        musicaAtual--
    }

    tagAudio.src = baseMusicas[musicaAtual].path;
    tagAudio.play()
    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlay(nomeAlbum, nomeMusica)
}

const btnPrev = document.getElementById('btn-prev')
btnPrev.addEventListener('click', tocarMusicaAnterior)

//Volume
//  const areaPlayerVolume = document.querySelector('area-player-volume')

//  areaPlayerVolume.addEventListener('input', function(){
//     tagAudio.volume = areaPlayerVolume.value
//  })

