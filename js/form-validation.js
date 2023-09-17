(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                if (!form.checkValidity()) {
                    event.stopPropagation()
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Smooth scrolling animation
                    });
                    document.getElementById("head-user").innerHTML = `Hello, I’m ${document.querySelector('#first-name').value} from Mokama.`;
                    document.getElementById("fullname-user").innerHTML = `${document.querySelector('#first-name').value} ${document.querySelector('#last-name').value}`;
                    document.getElementById("address-user").innerHTML = `${document.querySelector('#city-name').value}`;
                    document.getElementById("profession-user").innerHTML = `${document.querySelector('#profession').value}`;
                    document.getElementById("age-user").innerHTML = `${document.querySelector('#age').value}`;
                    document.getElementById("school-user").innerHTML = `${document.querySelector('#school').value}`;
                    document.getElementById("mobile-user").innerHTML = `+91 ${document.querySelector('#mobile').value}`;
                    document.getElementById("mobile-user").href = `tel:+91${document.querySelector('#mobile').value}`;
                    document.getElementById("email-user").innerHTML = `${document.querySelector('#email').value}`;
                    document.getElementById("email-user").href = `mailto:${document.querySelector('#email').value}`;
                    document.getElementById("insta-user").innerHTML = `${document.querySelector('#instagram-username').value}`;
                    document.getElementById("insta-user").href = `${document.querySelector('#instagram-url').value}`;
                    document.getElementById("twitter-user").innerHTML = `${document.querySelector('#twitter-username').value}`;
                    document.getElementById("twitter-user").href = `${document.querySelector('#twitter-url').value}`;
                    document.getElementById("facebook-user").innerHTML = `${document.querySelector('#facebook-username').value}`;
                    document.getElementById("facebook-user").href = `${document.querySelector('#facebook-url').value}`;
                    console.log(document.querySelector('.add-class'));
                }

                form.classList.add('was-validated')
            }, false)
        });
    
})()

document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const cityName = document.getElementById("city-name");
    const professionName = document.getElementById("profession");
    const age = document.getElementById("age");
    const instaUser = document.getElementById("instagram-username");
    const instaUrl = document.getElementById("instagram-url");
    const twitterUser = document.getElementById("twitter-username");
    const twitterUrl = document.getElementById("twitter-url");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");

    firstName.addEventListener("input", function () {
        const inputValue = firstName.value;

        if (!/^[A-Za-z]+$/.test(inputValue)) {
            let customValidationMessage = 'Please enter alphabets only.';
            firstName.setCustomValidity(customValidationMessage);
            document.querySelector('#first-name ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.length > 10) {
            let customValidationMessage = 'Max Character limit is 10';
            firstName.setCustomValidity(customValidationMessage);
            document.querySelector('#first-name ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            firstName.setCustomValidity(""); // Clear the custom validation message
        }
    });
    lastName.addEventListener("input", function () {
        const inputValue = lastName.value;

        if (!/^[A-Za-z]+$/.test(inputValue)) {
            let customValidationMessage = 'Please enter alphabets only.';
            lastName.setCustomValidity(customValidationMessage);
            document.querySelector('#last-name ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.length > 10) {
            let customValidationMessage = 'Max Character limit is 10';
            lastName.setCustomValidity(customValidationMessage);
            document.querySelector('#last-name ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            lastName.setCustomValidity(""); // Clear the custom validation message
        }
    });
    cityName.addEventListener("input", function () {
        const inputValue = cityName.value;

        if (!/^[A-Za-z]+$/.test(inputValue)) {
            let customValidationMessage = 'Please enter alphabets only.';
            cityName.setCustomValidity(customValidationMessage);
            document.querySelector('#city-name ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            cityName.setCustomValidity(""); // Clear the custom validation message
        }
    });
    professionName.addEventListener("input", function () {
        const inputValue = professionName.value;

        if (!/^[A-Za-z]+$/.test(inputValue)) {
            let customValidationMessage = 'Please enter alphabets only.';
            professionName.setCustomValidity(customValidationMessage);
            document.querySelector('#profession ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            professionName.setCustomValidity(""); // Clear the custom validation message
        }
    });
    age.addEventListener("input", function () {
        const inputValue = age.value;

        if (/^[A-Za-z]+$/.test(inputValue)) {
            let customValidationMessage = 'Only numbers are allowed!';
            age.setCustomValidity(customValidationMessage);
            document.querySelector('#age ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue > 81 || inputValue < 9) {
            let customValidationMessage = 'Value must be between 8 & 81!';
            age.setCustomValidity(customValidationMessage);
            document.querySelector('#age ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            age.setCustomValidity(""); // Clear the custom validation message
        }
    });
    instaUser.addEventListener("input", function () {
        const inputValue = instaUser.value;

        if (!/^[a-zA-Z0-9._]{1,30}$/.test(inputValue)) {
            let customValidationMessage = 'Only alphabets, numbers, period and underscore are allowed.';
            instaUser.setCustomValidity(customValidationMessage);
            document.querySelector('#instagram-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.length > 30) {
            let customValidationMessage = 'Max Character limit is 30';
            instaUser.setCustomValidity(customValidationMessage);
            document.querySelector('#instagram-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.includes("._") || inputValue.includes("_.") || inputValue.endsWith('.') || inputValue.endsWith('_')) {
            let customValidationMessage = 'Something seems wrong';
            instaUser.setCustomValidity(customValidationMessage);
            document.querySelector('#instagram-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            instaUser.setCustomValidity(""); // Clear the custom validation message
        }
    });
    instaUrl.addEventListener("input", function () {
        const inputValue = instaUrl.value;

        if (inputValue.length > 60) {
            let customValidationMessage = 'Max Character limit is 60';
            instaUrl.setCustomValidity(customValidationMessage);
            document.querySelector('#instagram-url ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (!inputValue.startsWith('https://www.instagram.com/') || !inputValue.endsWith('/')) {
            let customValidationMessage = 'Something seems wrong';
            instaUrl.setCustomValidity(customValidationMessage);
            document.querySelector('#instagram-url ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            instaUrl.setCustomValidity(""); // Clear the custom validation message
        }
    });
    twitterUser.addEventListener("input", function () {
        const inputValue = twitterUser.value;

        if (!/^[a-zA-Z0-9._]{1,30}$/.test(inputValue)) {
            let customValidationMessage = 'Only alphabets, numbers, period and underscore are allowed.';
            twitterUser.setCustomValidity(customValidationMessage);
            document.querySelector('#twitter-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.length > 30) {
            let customValidationMessage = 'Max Character limit is 30';
            twitterUser.setCustomValidity(customValidationMessage);
            document.querySelector('#twitter-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (inputValue.includes("._") || inputValue.includes("_.") || inputValue.endsWith('.') || inputValue.endsWith('_')) {
            let customValidationMessage = 'Something seems wrong';
            twitterUser.setCustomValidity(customValidationMessage);
            document.querySelector('#twitter-username ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            twitterUser.setCustomValidity(""); // Clear the custom validation message
        }
    });
    twitterUrl.addEventListener("input", function () {
        const inputValue = twitterUrl.value;

        if (inputValue.length > 60) {
            let customValidationMessage = 'Max Character limit is 60';
            twitterUrl.setCustomValidity(customValidationMessage);
            document.querySelector('#twitter-url ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else if (!inputValue.startsWith('https://www.twitter.com/') || !inputValue.endsWith('/')) {
            let customValidationMessage = 'Something seems wrong';
            twitterUrl.setCustomValidity(customValidationMessage);
            document.querySelector('#twitter-url ~ .invalid-feedback').innerHTML = customValidationMessage;
        } else {
            twitterUrl.setCustomValidity(""); // Clear the custom validation message
        }
    });
});

document.getElementById("instagram-username").addEventListener('keyup', (e) => {
    let typedKey = document.getElementById("instagram-username").value;
    let url = `https://www.instagram.com/${typedKey}/`;
    document.getElementById("instagram-url").value = url;
})
document.getElementById("twitter-username").addEventListener('keyup', (e) => {
    let typedKey = document.getElementById("twitter-username").value;
    let url = `https://www.twitter.com/${typedKey}/`;
    document.getElementById("twitter-url").value = url;
})
document.getElementById("facebook-username").addEventListener('keyup', (e) => {
    let typedKey = document.getElementById("facebook-username").value;
    let url = `https://www.facebook.com/${typedKey}/`;
    document.getElementById("facebook-url").value = url;
})