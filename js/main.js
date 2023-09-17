let hasFunctionRun1 = false;
let hasFunctionRun2 = false;

document.querySelector('.user').addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
function startType() {
    let type = document.querySelectorAll('.start-type-writer');
    type[0].textContent = `Hello, I’m Raman from Mokama.`;
    type[1].textContent = `Want to create your own? Let's fill it!`;
    type.forEach((element) => {
        let i = 0;
        console.log(element.innerHTML.trim());
        if (element.innerHTML == `Hello, I’m Raman from Mokama.` || element.innerHTML == `Want to create your own? Let's fill it!`) {
            let text = element.innerHTML.trim();
            element.innerHTML = '';
            let speed = 50;
            typeWriter();

            function typeWriter() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    console.log(text.charAt(i));
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
        }
    });
}

document.addEventListener('scroll', () => {
    let x = window.scrollY;
    if (x >= 320 && x <= 880 && !hasFunctionRun1) {
        // startType();
        var typed3 = new Typed('.type-it-1', {
            strings: ['My strings are: <i>strings</i> with', 'Hello, I’m Raman from Mokama.'],
            typeSpeed: 20,
            backSpeed: 0,
            smartBackspace: true, // this is a default
            loop: false
        });

        document.querySelector('.add-class').classList.add('animate__animated');
        document.querySelector('.add-class').classList.add('animate__fadeInUpBig');
        hasFunctionRun1 = true;
    }
    if (x >= 1300 && !hasFunctionRun2) {
        // startType();
        var typed3 = new Typed('.type-it-2', {
            strings: ['My strings are: <i>strings</i> with', `Want to create your own? Let's fill it!`],
            typeSpeed: 20,
            backSpeed: 0,
            smartBackspace: true, // this is a default
            loop: false
        });
        hasFunctionRun2 = true;
    }
});
// var typed = new Typed('.type-it-1', {
//     strings: [
//         "Hello, I’m Raman from Mokama.",
//     ],
//     typeSpeed: 0,
//     backSpeed: 0,
//     loop: true
// });
