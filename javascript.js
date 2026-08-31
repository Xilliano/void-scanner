const inputImg = document.getElementById('image');

inputImg.onchange = function () {
    let src = URL.createObjectURL(this.file);
    document.querySelector('img').src = src;
}
