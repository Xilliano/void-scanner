const inputImg = document.querySelector('#image');
const image = document.querySelector("img");
const reset = document.querySelector("button[type=reset]");
const submit = document.querySelector("button[type=submit]");

inputImg.addEventListener("change", () => {
    const [file] = inputImg.files;
    if (file) {
        image.src = URL.createObjectURL(file);
    }
})

reset.addEventListener("click", () => {
    image.src = '';
})
