const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const uploadedImage = document.getElementById('uploaded-image');

// Prevent the default behavior of file drops
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('bg-secondary');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('bg-secondary');
});

// Handle the dropped file
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('bg-secondary');

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});

// Trigger file input when the drop zone is clicked
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// Handle file input change
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});

// Handle URL paste
const imgUrl = document.getElementById('img-url');
imgUrl.addEventListener('click', () => {
    const url = prompt('Please enter the URL of the image:');
    if (url) {
        uploadedImage.src = url;
        uploadedImage.style.display = 'block';
    }
});