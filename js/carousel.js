updateImageSource();
window.addEventListener("resize", updateImageSource);

function updateImageSource() {
    if (window.innerWidth > window.innerHeight) {
        document.querySelector('.carousel-inner').innerHTML = '';

        for (let i = 21; i < 28; i++) {
            let mainDiv = document.querySelector('.carousel-inner');
            let carousel = document.createElement('div');
            carousel.classList.add('carousel-item');
            let image = document.createElement('img');
            image.classList.add('d-block');
            image.classList.add('w-100');
            image.addEventListener("contextmenu", function (event) {
                event.preventDefault();
            });
            image.setAttribute('src', `./Images/img${i}.jpg`);
            image.setAttribute('alt', `./Images/img${i}.jpg`);
            if (i == 21) {
                carousel.classList.add('active')
            }
            carousel.appendChild(image);
            mainDiv.appendChild(carousel);
        }

    } else {
        document.querySelector('.carousel-inner').innerHTML = '';

        for (let i = 1; i < 21; i++) {
            let mainDiv = document.querySelector('.carousel-inner');
            let carousel = document.createElement('div');
            carousel.classList.add('carousel-item');
            let image = document.createElement('img');
            image.classList.add('d-block');
            image.classList.add('w-100');
            image.addEventListener("contextmenu", function (event) {
                event.preventDefault();
            });
            image.setAttribute('src', `./Images/img${i}.jpg`)
            image.setAttribute('alt', `./Images/img${i}.jpg`)
            if (i == 1) {
                carousel.classList.add('active')
            }
            carousel.appendChild(image);
            mainDiv.appendChild(carousel);
        }
    }

}