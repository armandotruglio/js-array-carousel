//Recupero gli elementi del DOM

const resultGallery = document.getElementById('gallery');
const resultThumbnail = document.getElementById('thumbnail');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


//Genero le immagini della galleria nel DOM
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

for(i = 0; i < sources.length; i++){
    const image = document.createElement('img');
    image.src = sources[i];
    image.alt = `image-${i + 1}`;

    resultGallery.appendChild(image);
}

for(i = 0; i < sources.length; i++){
    const image = document.createElement('img');
    image.src = sources[i];
    image.alt = `image-${i + 1}`;

    resultThumbnail.appendChild(image);
}


//Rendo la prima immagine visibile

const gallery = document.querySelectorAll('#gallery img');
const thumbnail = document.querySelectorAll('#thumbnail img');

let currentActiveIndex = 0;

gallery[currentActiveIndex].classList.add('active');
thumbnail[currentActiveIndex].classList.add('active');

//Rendo dinamico lo slider

prevButton.addEventListener('click', function(){
    gallery[currentActiveIndex].classList.remove('active');
    thumbnail[currentActiveIndex].classList.remove('active');

    if(currentActiveIndex === 0){
        currentActiveIndex = gallery.length - 1;
    }
    else{
        currentActiveIndex--;
    }

    thumbnail[currentActiveIndex].classList.add('active');
    gallery[currentActiveIndex].classList.add('active');
})

nextButton.addEventListener('click', function(){
    gallery[currentActiveIndex].classList.remove('active');
    thumbnail[currentActiveIndex].classList.remove('active');

    if(currentActiveIndex === 4){
        currentActiveIndex = 0;
    }
    else{
        currentActiveIndex++;
    }

    thumbnail[currentActiveIndex].classList.add('active');
    gallery[currentActiveIndex].classList.add('active');
})
