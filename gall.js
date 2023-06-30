const image = document.getElementById('flower1')
console.log(image);

const image2 = document.getElementById('flower2')
console.log(image2);

function showImagePrev() {
    image.src = '/assets/images/lower2.jpg'
}

function showImageNext() {
    image.src = '/assets/images/flower.jpg'

}