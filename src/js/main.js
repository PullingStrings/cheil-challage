
//smooth scroll to element


//star ratings, thought maybe you could adjust the number of stars with just a change of an intger
function ratings () {
  for (let i = 0; i <= 4; i++ ) {
    let startImg = document.createElement('img');
    let imagePath = '../img/star.svg';
    let img = new Image();
    img.src = imagePath;
    document.getElementById("stars").appendChild(img);
  }
}
ratings();
function stars () {
  for (let i = 0; i <= 4; i++ ) {
    let startImg = document.createElement('img');
    let imagePath = '../img/star.svg';
    let img = new Image();
    img.src = imagePath;
    document.getElementById("star-rating").appendChild(img);
  }
}
stars();
function starRating () {
  for (let i = 0; i <= 4; i++ ) {
    let startImg = document.createElement('img');
    let imagePath = '../img/star.svg';
    let img = new Image();
    img.src = imagePath;
    document.getElementById("rating").appendChild(img);
  }
}
starRating();

//autoplay video

let promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Auto-play was prevented
    // Show paused UI.
    console.log("display pause and play icon");
  });
}

//slider for ratings using tiny-slider

let slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayText: ['start', 'stop'],
  controls: false,
  responsive: {
    768: {
      disable: true,
      center: true,
      nav: false
    }
  }
});

// changing images with icons


function changeImage() {
  //make other buttons inactive
  document.images["bt-tab-grey"].src = "../img/bt-tab-grey.png";
  document.images["rakuten-tab-grey"].src = "../img/rakuten-tab-grey.png";
  document.images["xbox-tab-grey"].src = "../img/xbox-tab-grey.png";
  //make this button active
  document.images["apple-tv-icon"].src = "../img/apple-tab-active.png";
  //change background
  document.getElementById("brands-background").style.backgroundImage="url(../img/apple-background.jpg)";
  //change scene background
  document.getElementById("scene").style.backgroundImage="url(../img/apple-scene.jpg)";
}

function changeBTImage() {
  //make other button inactive
  document.images["apple-tv-icon"].src = "../img/apple-tab-grey.png";
  document.images["rakuten-tab-grey"].src = "../img/rakuten-tab-grey.png";
  document.images["xbox-tab-grey"].src = "../img/xbox-tab-grey.png";
  //make this button active
  document.images["bt-tab-grey"].src = "../img/bt-tab-active.png"
  //change background
  document.getElementById("brands-background").style.backgroundImage="url(../img/bt-background.jpg)";
  //chanage scene background
  document.getElementById("btscene").style.backgroundImage="url(../img/bt-scene.jpg)";
}
//

function changeRakutenImage() {
  //make other button inactive
  document.images["bt-tab-grey"].src = "../img/bt-tab-grey.png";
  document.images["xbox-tab-grey"].src = "../img/xbox-tab-grey.png";
  document.images["apple-tv-icon"].src = "../img/apple-tab-grey.png";
  //make this button active
  document.images["rakuten-tab-grey"].src = "../img/rakuten-tab-active.png"
  //change background
  document.getElementById("brands-background").style.backgroundImage="url(../img/rakuten-background.jpg)";
  //chanage scene background
  document.getElementById("rakscene").style.backgroundImage="url(../img/rakuten-scene.jpg)";
}


function changeXboxImage() {
  //make other button inactive
  document.images["rakuten-tab-grey"].src = "../img/rakuten-tab-grey.png";
  document.images["apple-tv-icon"].src = "../img/apple-tab-grey.png";
  document.images["bt-tab-grey"].src = "../img/bt-tab-grey.png";
  //make this button active
  document.images["xbox-tab-grey"].src = "../img/xbox-tab-active.png"
  //change background
  document.getElementById("brands-background").style.backgroundImage="url(../img/xbox-background.jpg)";
  //chanage scene background
  document.getElementById("xboxscene").style.backgroundImage="url(../img/xbox-scene.jpg)";
}
