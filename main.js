// GET VARIABLES

var images = document.getElementById("images");
var prevBtn = document.getElementById("prev");
var forwardBtn = document.getElementById("next");
var img = document.getElementsByTagName("img");


// CAROUSEL 1
var position = 0;

function start() {
    position++;
    changeImage();
}

function changeImage() {
    if (position > 9 - 1) {
        position = 0;
    }
    else if (position < 0) {
        position = 9 - 1;
    }

    images.style.transform = `translateX(${-position * 500}px)`;
}

forwardBtn.addEventListener("click", () => {
    position++;
    changeImage();
});

prevBtn.addEventListener("click", () => {
    position--;
    changeImage();
});


// CAROUSEL 2 
var position_2 = 0;
var images_2 = document.getElementById("images_2");
var prevBtn_2 = document.getElementById("prev_2");
var forwardBtn_2 = document.getElementById("next_2");


function changeImage_2() {
    if (position_2 > 2 - 1) {
        position_2 = 0;
    }
    else if (position_2 < 0) {
        position_2 = 2 - 1;
    }

    images_2.style.transform = `translateX(${-position_2 * 500}px)`;
}

forwardBtn_2.addEventListener("click", () => {
    position_2++;
    changeImage_2();
});

prevBtn_2.addEventListener("click", () => {
    position_2--;
    changeImage_2();
});




// UNUSED

// Change image label below
function setLabelText(linkElement) {
  const label = document.getElementById('lakeLabel');
  label.textContent = linkElement.textContent;
}

// Function to swap images based on clicked lake
function changeLake(lakeCode) {
    currentLake = lakeCode;
    position = 0;

    // replace all img src
    for (let i = 0; i < img.length; i++) {
        // Example: i=0 → "oke1.jpg", i=1 → "oke1lab.jpg", etc.
        let baseIndex = Math.floor(i / 3) + 1; 
        let type = i % 3 === 0 ? "" : (i % 3 === 1 ? "lab" : "pred");
        img[i].src = `./images/${lakeCode}${baseIndex}${type}.jpg`;
    }

    // reset transform so it starts at first image
    images.style.transform = `translateX(0px)`;
}