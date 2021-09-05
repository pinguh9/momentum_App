const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");

//document.body.appendChild(bgimage);

const urlimg = `url('img/${chosenImage}')`;
document.body.style.backgroundImage = urlimg;
